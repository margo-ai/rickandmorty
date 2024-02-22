import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { CharacterCard, CardProps } from '../character-card/CharacterCard';

import { GET_CHARACTERS } from 'src/graphql/queries/getCharacters';
import { useLazyQuery, useQuery } from '@apollo/client';
import { ModalWrapper } from '../modal-wrapper/ModalWrapper';
import { CharacterDetails } from '../character-details/CharacterDetails';
import { FILTER_CHARACTERS_BY_STATUS } from 'src/graphql/queries/filterCharactersByStatus';
import { GET_CHARACTERS_WITH_FILTERS } from 'src/graphql/queries/filteredCharacters';
import { FilterForm } from '../filter-form/FilterForm';

const SectionWrapper = styled.div`
  margin: 15px 0;
  padding: 25px 20px;
  background-color: rgba(241, 247, 173, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharactersList = styled.ul`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(3, 250px);
`;

const Title = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

type TCharacterInfo = {
  id?: string;
  name?: string;
  species?: string;
  status?: string;
  type?: string;
  gender?: string;
  image?: string;
  origin?: { name: string; type: string };
  location?: { name: string; dimension: string };
};

type TFilterValues = {
  name?: string;
  status?: string;
  gender?: string;
  type?: string;
  species?: string;
};

export const CharactersSection = () => {
  const [filterValues, setFilterValues] = useState<TFilterValues>({
    name: '',
    status: '',
    gender: '',
    type: '',
    species: '',
  });

  const [getCharactersWithFilters, { data: charactersWithAllFilters, refetch }] = useLazyQuery(
    GET_CHARACTERS_WITH_FILTERS,
    {
      variables: {
        name: filterValues.name,
        status: filterValues.status,
        species: filterValues.species,
        gender: filterValues.gender,
        type: filterValues.type,
      },
    },
  );

  const updateFilters = (data: TFilterValues) => setFilterValues(data);

  console.log({ charactersWithAllFilters });
  const filteredData = charactersWithAllFilters?.characters.results || [];

  useEffect(() => {
    getCharactersWithFilters();
  }, [filterValues]);

  return (
    <SectionWrapper>
      <FilterForm filterValues={filterValues} updateFilters={updateFilters} updateList={() => refetch()} />
      <Title>Characters List</Title>
      <CharactersList>
        {filteredData.map(({ id, name, gender, species, status, image, origin, location, type }: TCharacterInfo) => (
          <ModalWrapper
            actionNode={<CharacterCard key={id} name={name} gender={gender} image={image} species={species} />}
          >
            {({ hide }) => (
              <CharacterDetails
                data={{ name, gender, image, species, status, origin, location, type }}
                onClose={hide}
              />
            )}
          </ModalWrapper>
        ))}
      </CharactersList>
    </SectionWrapper>
  );
};
