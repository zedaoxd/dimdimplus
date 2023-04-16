import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container, Content, Figure, Nav } from "./styles";

export const Navbar = () => {
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
          <Button style={{ color: "#fff", background: "#fec142" }}>
            Criar conta grátis
          </Button>
          <Button
            style={{
              color: "#ccc",
              background: "transparent",
              border: "1px solid #ccc",
            }}
          >
            Entrar
          </Button>
        </Nav>
      </Content>
    </Container>
  );
};
