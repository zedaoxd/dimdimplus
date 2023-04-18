import { Container } from "./styles";
import { Benefits, Intro } from "./components";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Intro />
        <Benefits />
      </Container>
    </motion.div>
  );
};
