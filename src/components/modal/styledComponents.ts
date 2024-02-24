import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 997;
  animation: show 0.4s forwards;
`;

export const StyledModalBody = styled.div`
  width: 40%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);
  z-index: 998;

  @media screen and (max-width: 660px) {
    width: 55%;
    padding: 1.2em;
  }

  @media screen and (max-width: 450px) {
    width: 65%;
    padding: 1em;
  }
`;
