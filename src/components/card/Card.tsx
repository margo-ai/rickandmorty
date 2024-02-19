import React from 'react';

import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 20px;
`;

const ImageWrapper = styled.div`
  max-height: 400px;
  overflow: hidden;
  img {
    width: 100%;
  }
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
      <Name>{`Name: ${name}`}</Name>
      <div>{`Gender: ${gender}`}</div>
      <div>{`Species: ${species}`}</div>
    </CardWrapper>
  );
};
