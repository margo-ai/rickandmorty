import styled, { keyframes } from "styled-components";
import { variables } from "../../styles/variables";

export const SectionWrapper = styled.div`
  margin: 15px 0;
  padding: 25px 20px;
  background-color: ${variables.colors.backgroundWithOpacity};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding: 20px 15px;
  }
`;

export const CharactersList = styled.ul`
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
  @media screen and (max-width: 400px) {
    grid-template-columns: 210px;
  }
`;

export const Title = styled.h1`
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

export const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

export const NotFoundWrapper = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;
