import React from 'react';

import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.8s ease;

  &:hover {
    /* border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%; */
    box-shadow: 18px 18px rgba(0, 0, 0, 0.25);
    & img {
      transform: scale(1.1);
    }
  }
`;

const Name = styled.h2`
  font-size: 20px;
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
`;

export type CardProps = {
  id?: string;
  name: string;
  species: string;
  gender: string;
  image: string;
};

export const Card = ({ name, gender, image, species }: CardProps) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={image} alt="Character Image" />
      </ImageWrapper>
      <CardInfo>
        <Name>{`Name: ${name}`}</Name>
        <div>{`Gender: ${gender}`}</div>
        <div>{`Species: ${species}`}</div>
      </CardInfo>
    </CardWrapper>
  );
};
