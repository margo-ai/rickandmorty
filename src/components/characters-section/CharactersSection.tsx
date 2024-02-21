import React from 'react';

import styled from 'styled-components';

import { CharacterCard, CardProps } from '../character-card/characterCard';

import { GET_CHARACTERS } from 'src/graphql/queries/getCharacters';
import { useQuery } from '@apollo/client';
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

export const CharactersSection = () => {
  const { data } = useQuery(GET_CHARACTERS);

  // const { data: filteredData } = useQuery(FILTER_CHARACTERS_BY_STATUS, { variables: { input: 'Alive' } });

  const { data: charactersWithAllFilters } = useQuery(GET_CHARACTERS_WITH_FILTERS, {
    variables: { name: 'Rick', status: 'Alive', species: 'Human' },
  });

  const items = data?.characters.results || [];
  // const filteredDataA = filteredData?.characters.results || [];
  console.log({ charactersWithAllFilters });
  const filteredData = charactersWithAllFilters?.characters.results || [];

  return (
    <SectionWrapper>
      <FilterForm />
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
