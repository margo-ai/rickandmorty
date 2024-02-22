import React from 'react';

import styled from 'styled-components';
import { variables } from '../../styles/variables';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.8s ease;

  cursor: pointer;

  &:hover {
    /* border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%; */
    box-shadow: 18px 18px rgba(0, 0, 0, 0.25);
    & img {
      transform: scale(1.1);
    }
  }
`;

const Name = styled.h2`
  font-size: ${variables.fontSizes.fontM}px;

  @media screen and (max-width: 700px) {
    font-size: ${variables.fontSizes.fontS}px;
  }

  @media screen and (max-width: 600px) {
    font-size: ${variables.fontSizes.fontM}px;
  }

  @media screen and (max-width: 500px) {
    font-size: ${variables.fontSizes.fontS}px;
  }
`;

const ImageWrapper = styled.div`
  max-height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    transition: transform 0.8s ease;
  }
`;

const CardInfo = styled.div`
  padding: 12px;

  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

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
        {/* <div>{`Gender: ${gender}`}</div> */}
        {/* <div>{`Species: ${species}`}</div> */}
      </CardInfo>
    </CardWrapper>
  );
};
