import { Outlet } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "./styles";
import { motion } from "framer-motion";

export const Auth = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h1>
          DIMDIM <AddIcon />
        </h1>
        <Outlet />
      </Container>
    </motion.div>
  );
};
