import { Link } from "react-router-dom";
import { Container, Form } from "./styles";

export const Login = () => {
  return (
    <Container>
      <h1>Entre agora!</h1>
      <Form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>

        <div>
          <p>
            Não tem conta? <Link to="/auth/signup">cadastre-se</Link>
          </p>
          <p>
            <Link to="/auth/forgot-password">Recuperar senha</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};
