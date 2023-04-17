import { Outlet } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "./styles";

export const Auth = () => {
  return (
    <Container>
      <h1>
        DIMDIM <AddIcon />
      </h1>
      <Outlet />
    </Container>
  );
};
