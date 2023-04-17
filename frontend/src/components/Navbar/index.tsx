import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button, ButtonLogin, Container, Content, Figure, Nav } from "./styles";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Link to="/">
          <Figure>
            <img src="./img/logo.png" alt="logo" />
            <figcaption>
              <h1>
                DIMDIM
                <span>
                  <AddIcon />
                </span>
              </h1>
            </figcaption>
          </Figure>
        </Link>

        <Nav>
          <Button>Criar conta grátis</Button>
          <ButtonLogin onClick={() => navigate("/auth/login")}>
            Entrar
          </ButtonLogin>
        </Nav>
      </Content>
    </Container>
  );
};
