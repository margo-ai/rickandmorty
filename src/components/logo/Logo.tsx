import React from 'react';

import styled from 'styled-components';

import image from '../../assets/logo.png';

const LogoWrapper = styled.div`
  width: 400px;

  img {
    width: 100%;
  }
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src={image} alt="Logo image" />
    </LogoWrapper>
  );
};
