import { Container, LeftContainer, RightContainer } from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Home = () => {
  return (
    <Container>
      <LeftContainer>
        <img src="./img/home-main.gif" alt="" />
      </LeftContainer>
      <RightContainer>
        <h1>Sistema para controle financeiro</h1>
        <h2>Simples e grátis</h2>

        <p>
          Mantenha em dia todas as suas finaças, saiba exatamente para onde esta
          indo seu dinheiro, com essa solução fácil de usar e o melhor de Graça
        </p>

        <button>
          Teste agora mesmo
          <span>
            <ArrowForwardIcon />
          </span>
        </button>
      </RightContainer>
    </Container>
  );
};
