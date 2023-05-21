import { Box2, Container, Section } from "./HomePage.styled";

const Home = () => {
  return (
    <Section>
      <Container>
        <Box2>
          <h1>Welcome to the tweets area!</h1>
          <p>
            This app created to help you follow your tweet friends!
          </p>
        </Box2>
      </Container>
    </Section>
  );
};

export default Home;