import { Link } from "react-router-dom";
import { Container, Form } from "./styles";

export const Sigup = () => {
  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <button type="submit">Cadastrar</button>
        <div>
          <p>
            Já tem conta? <Link to="/admin/login">entre</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};
