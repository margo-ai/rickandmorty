import React from "react";

import { Wrapper } from "./styledComponents";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
