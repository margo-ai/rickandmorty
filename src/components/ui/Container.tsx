import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 20px;
  padding: 15px;
`;

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
