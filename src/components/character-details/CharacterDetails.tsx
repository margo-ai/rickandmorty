import React from 'react';

import styled from 'styled-components';

import { variables } from '../../styles/variables';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;

  @media screen and (max-width: 700px) {
    margin-bottom: 0.8em;
  }
`;

const ImageWrapper = styled.div`
  max-height: 280px;
  max-width: 280px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  align-self: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 840px) {
    max-height: 240px;
    max-width: 240px;
  }

  @media screen and (max-width: 700px) {
    max-height: 220px;
    max-width: 220px;
  }

  @media screen and (max-width: 500px) {
    max-height: 200px;
    max-width: 200px;
  }
`;

const Name = styled.h3`
  font-size: ${variables.fontSizes.fontM}px;
  text-transform: uppercase;
  align-self: center;
  margin-bottom: 1em;

  @media screen and (max-width: 700px) {
    font-size: ${variables.fontSizes.fontS}px;
    margin-bottom: 0.8em;
  }

  @media screen and (max-width: 500px) {
    font-size: ${variables.fontSizes.fontXs}px;
    margin-bottom: 0.5em;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 0.4em;

  @media screen and (max-width: 700px) {
    font-size: ${variables.fontSizes.fontXs}px;
    margin-bottom: 0.2em;
  }

  @media screen and (max-width: 500px) {
    font-size: ${variables.fontSizes.fontXss}px;
    margin-bottom: 0.1em;
  }
`;

const BoldTitle = styled.span`
  font-weight: 700;
`;

const CloseButton = styled.button`
  display: block;
  width: 250px;
  line-height: 46px;
  text-decoration: none;
  text-align: center;
  border-radius: 50px;
  border: 2px solid #222;
  color: #222;
  font-size: ${variables.fontSizes.fontS}px;
  position: relative;
  overflow: hidden;
  background: transparent;
  text-transform: uppercase;
  transition: all 0.5s;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;
    background: ${variables.colors.background};
    z-index: -1;
    transition: all 0.35s;
  }

  &::before {
    opacity: 0.5;
  }
  &::after {
    transition-delay: 0.2s;
  }

  &:hover {
    border-color: ${variables.colors.background};
  }

  &:hover::before,
  &:hover::after {
    top: 0;
  }

  @media screen and (max-width: 840px) {
    width: 200px;
  }

  @media screen and (max-width: 760px) {
    width: 180px;
    font-size: ${variables.fontSizes.fontXs}px;
    line-height: 40px;
  }

  @media screen and (max-width: 660px) {
    width: 160px;
    font-size: ${variables.fontSizes.fontXss}px;
    line-height: 35px;
  }

  @media screen and (max-width: 500px) {
    width: 140px;
    font-size: ${variables.fontSizes.fontXsss}px;
    line-height: 30px;
  }
`;

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
