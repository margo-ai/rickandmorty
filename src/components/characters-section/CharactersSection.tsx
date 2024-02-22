import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import styled, { keyframes } from 'styled-components';
import { variables } from '../../styles/variables';

import notfound from '../../assets/notfound.png';

import { CharacterCard } from '../character-card/characterCard';
import { ModalWrapper } from '../modal-wrapper/ModalWrapper';
import { CharacterDetails } from '../character-details/CharacterDetails';
import { GET_CHARACTERS_WITH_FILTERS } from 'src/graphql/queries/getFilteredCharacters';
import { FilterForm } from '../filter-form/FilterForm';

const SectionWrapper = styled.div`
  margin: 15px 0;
  padding: 25px 20px;
  background-color: ${variables.colors.backgroundWithOpacity};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharactersList = styled.ul`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(3, 250px);

  @media screen and (max-width: 960px) {
    gap: 1.2em;
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(2, 300px);
    gap: 2em;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 260px);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 220px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 320px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 260px;
  }
`;

const Title = styled.h1`
  font-size: ${variables.fontSizes.fontL}px;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media screen and (max-width: 850px) {
    font-size: ${variables.fontSizes.fontM}px;
  }

  @media screen and (max-width: 700px) {
    font-size: ${variables.fontSizes.fontS}px;
  }
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const NotFoundWrapper = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
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

  const [getCharactersWithFilters, { data: charactersWithAllFilters, loading }] = useLazyQuery(
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
      <FilterForm filterValues={filterValues} updateFilters={updateFilters} />
      <Title>Characters List</Title>
      {!!loading ? (
        <Loader />
      ) : (
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
      )}
      {filteredData.length === 0 && !loading ? (
        <NotFoundWrapper>
          <img src={notfound} />
        </NotFoundWrapper>
      ) : null}
    </SectionWrapper>
  );
};
