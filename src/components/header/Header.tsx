import React from 'react';

import { HeaderWrapper } from './styledComponents';

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};
