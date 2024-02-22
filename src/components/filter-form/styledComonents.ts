import styled from 'styled-components';
import { variables } from '../../styles/variables';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 45px;
`;

export const Title = styled.h2`
  font-size: ${variables.fontSizes.fontM}px;
  text-transform: uppercase;
  margin-bottom: 1em;
  align-self: flex-start;

  @media screen and (max-width: 640px) {
    font-size: ${variables.fontSizes.fontS}px;
    align-self: auto;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.2em;
  margin-bottom: 20px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 0.8em;
  }

  @media screen and (max-width: 500px) {
    gap: 0.5em;
  }
`;

export const StyledFormItem = styled.div`
  margin-bottom: 0.5em;
  input {
    font-size: ${variables.fontSizes.fontXs}px;
    padding: 10px 14px;

    @media screen and (max-width: 500px) {
      font-size: ${variables.fontSizes.fontXss}px;
      padding: 8px 12px;
    }
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonCommonStyles = styled.button`
  background-color: ${variables.colors.background};
  border-color: #fff;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #222;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    font-size: ${variables.fontSizes.fontXs}px;
    padding: 5px 8px;
  }
`;
export const SubmitButton = styled(ButtonCommonStyles)`
  width: 100px;
`;

export const ResetButton = styled(ButtonCommonStyles)`
  width: 150px;

  @media screen and (max-width: 500px) {
    width: 130px;
  }
`;
