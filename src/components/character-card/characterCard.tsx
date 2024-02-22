import React from 'react';

import { CardInfo, CardWrapper, ImageWrapper, Name } from './styledComponents';

export type CardProps = {
  id?: string;
  name?: string;
  species?: string;
  gender?: string;
  image?: string;
  origin?: { name: string; type: string };
  location?: { name: string; dimension: string };
};

export const CharacterCard = ({ name, image }: CardProps) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={image} alt="Character Image" />
      </ImageWrapper>
      <CardInfo>
        <Name>{name}</Name>
      </CardInfo>
    </CardWrapper>
  );
};
