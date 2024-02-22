import React from 'react';

import { BoldTitle, CloseButton, ImageWrapper, InfoItem, InfoWrapper, Name } from './styledComponents';

type CharacterData = {
  id?: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  origin: { name: string; type: string };
  location: { name: string; dimension: string };
};

type Props = {
  data: Partial<CharacterData>;
  onClose: () => void;
};

export const CharacterDetails = ({ data, onClose }: Props) => {
  const { name, gender, image, species, origin, location, status, type } = data;
  console.log(data);

  return (
    <>
      <InfoWrapper>
        <ImageWrapper>
          <img src={image} alt="Character Image" />
        </ImageWrapper>
        <Name>{name}</Name>
        <InfoItem>
          <BoldTitle>Gender: </BoldTitle>
          {gender}
        </InfoItem>
        <InfoItem>
          <BoldTitle>Species: </BoldTitle>
          {species}
        </InfoItem>
        <InfoItem>
          <BoldTitle>Type: </BoldTitle>
          {type.length === 0 ? 'unknown' : type}
        </InfoItem>
        <InfoItem>
          <BoldTitle>Origin: </BoldTitle>
          {origin.name}
        </InfoItem>
        <InfoItem>
          <BoldTitle>Location: </BoldTitle>
          {location.name}
        </InfoItem>
        <InfoItem>
          <BoldTitle>Status: </BoldTitle>
          {status}
        </InfoItem>
      </InfoWrapper>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </>
  );
};
