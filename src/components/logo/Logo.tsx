import React from 'react';

import { LogoWrapper } from './styledComponents';
import image from '../../assets/logo.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src={image} alt="Logo image" />
    </LogoWrapper>
  );
};
