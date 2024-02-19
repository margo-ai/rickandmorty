import React from 'react';

import styled from 'styled-components';

import { GET_CHARACTERS } from 'src/graphql/queries/getCharacters';
import { useQuery } from '@apollo/client';

const SectionWrapper = styled.div`
  margin: 15px 0;
  padding: 10px;
  background-color: rgba(241, 247, 173, 0.8);
  border-radius: 10px;
`;

const CharactersList = styled.ul``;

type Props = {
  children: React.ReactNode;
};

export const CharactersSection = ({ children }: Props) => {
  const { data } = useQuery(GET_CHARACTERS);

  console.log({ data });

  return (
    <SectionWrapper>
      <CharactersList>{children}</CharactersList>
    </SectionWrapper>
  );
};
