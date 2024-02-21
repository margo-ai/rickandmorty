import React from 'react';

import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1.2em;
`;

const ImageWrapper = styled.div`
  /* max-height: 350px;
  overflow: hidden;
  img {
    width: 100%;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 22px;
  text-transform: uppercase;
  align-self: center;
  margin-bottom: 1em;
`;

const InfoItem = styled.div`
  margin-bottom: 0.4em;
`;

const BoldTitle = styled.span`
  font-weight: 700;
`;

const CloseButton = styled.button`
  /* background-color: rgba(241, 247, 173);
  padding: 10px 30px;
  cursor: pointer; */
  display: block;
  width: 250px;
  height: 50px;
  line-height: 46px;
  text-decoration: none;
  text-align: center;
  border-radius: 50px;
  border: 2px solid #222;
  color: #222;
  font-size: 20px;
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
    background: rgba(241, 247, 173, 1);
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
    color: #fff;
    border-color: rgba(241, 247, 173, 1);
  }

  &:hover::before,
  &:hover::after {
    top: 0;
  }
`;

type TEpisode = {
  name: string;
  episode: string;
};

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
  //   episode: TEpisode[];
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
