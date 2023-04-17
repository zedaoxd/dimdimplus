import { Container } from "./styles";
import { Benefits, Intro } from "./components";

export const Home = () => {
  return (
    <Container>
      <Intro />
      <Benefits />
    </Container>
  );
};
