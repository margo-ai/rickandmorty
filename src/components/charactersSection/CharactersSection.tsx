import React from 'react';

import styled from 'styled-components';

import { Card, CardProps } from '../card/Card';

import { GET_CHARACTERS } from 'src/graphql/queries/getCharacters';
import { useQuery } from '@apollo/client';
import { ModalWrapper } from '../modal-wrapper/ModalWrapper';
import { CharacterDetails } from '../character-details/CharacterDetails';

const SectionWrapper = styled.div`
  margin: 15px 0;
  padding: 10px;
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

export const CharactersSection = () => {
  const { data } = useQuery(GET_CHARACTERS);

  const items = data?.characters.results || [];

  console.log({ items });
  return (
    <SectionWrapper>
      <Title>Characters List</Title>
      <CharactersList>
        {items.map(({ id, name, gender, species, image }: CardProps) => (
          <ModalWrapper actionNode={<Card key={id} name={name} gender={gender} image={image} species={species} />}>
            {({ hide }) => <CharacterDetails data={{ id, name, gender, species, image }} onClose={hide} />}
          </ModalWrapper>
        ))}
      </CharactersList>
    </SectionWrapper>
  );
};
