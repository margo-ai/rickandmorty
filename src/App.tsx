import React from "react";

import { Container } from "./components/ui/Сontainer";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { CharactersSection } from "./components/CharactersSection";

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <main>
        <CharactersSection />
      </main>
    </Container>
  );
};
