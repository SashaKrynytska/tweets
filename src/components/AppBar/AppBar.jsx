import { Container, Section } from '../../pages/HomePage/HomePage.styled';
import { Header } from './AppBar.styled';
import { NavBar } from './NavBar';

export const AppBar = () => {
  return (
    <Section>
        <Container>
    <Header>
      <NavBar />
    </Header>
    </Container>
    </Section>
  )
};