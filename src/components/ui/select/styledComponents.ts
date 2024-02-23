import styled from "styled-components";
import { variables } from "src/styles/variables";

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 230px;
  select {
    font-size: ${variables.fontSizes.fontXs}px;
    padding: 10px 14px;

    cursor: pointer;

    @media screen and (max-width: 500px) {
      font-size: ${variables.fontSizes.fontXss}px;
      padding: 8px 12px;
    }
  }
`;
