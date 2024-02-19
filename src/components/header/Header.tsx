import React from 'react';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 0px 10px;
  display: flex;
  justify-content: center;
`;

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};
