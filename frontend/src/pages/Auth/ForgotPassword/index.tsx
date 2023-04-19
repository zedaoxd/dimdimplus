import { Container, Form } from "./styles";

export const ForgotPassword = () => {
  return (
    <Container>
      <h1>Recuperar senha</h1>
      <Form>
        <input type="email" placeholder="E-mail" />
        <button type="submit">Recuperar senha</button>
      </Form>
    </Container>
  );
};
