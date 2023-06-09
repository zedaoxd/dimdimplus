import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { Container, LeftContainer, RightContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const navigate = useNavigate();

  return (
    <Container>
      <LeftContainer>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        >
          <h1>Sistema para controle financeiro</h1>
          <h2>Simples e grátis</h2>

          <p>
            Mantenha em dia todas as suas finaças, saiba exatamente para onde
            esta indo seu dinheiro, com essa solução fácil de usar e o melhor de
            Graça
          </p>

          <button onClick={() => navigate("/auth/login")}>
            Teste agora mesmo
            <span>
              <ArrowForwardIcon />
            </span>
          </button>
        </motion.div>
      </LeftContainer>
      <RightContainer>
        <motion.img
          src="./img/logo-home.gif"
          alt=""
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        />
      </RightContainer>
    </Container>
  );
};
