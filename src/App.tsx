import React from 'react';

import { Container } from './components/ui/Container';
import { Header } from './components/header/Header';
import { Logo } from './components/logo/Logo';
import { CharactersSection } from './components/charactersSection/CharactersSection';
export const App = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <main>
        <CharactersSection>Список персонажей</CharactersSection>
      </main>
    </Container>
  );
};
