import { Container, Form } from "./styles";

export const ResetPassword = () => {
  return (
    <Container>
      <h1>Resetar senha</h1>
      <Form>
        <input type="password" placeholder="Nova senha" />
        <input type="password" placeholder="Confirme a nova senha" />
        <button type="submit">Resetar senha</button>
        <p>
          <a href="/auth/login">Voltar para o login</a>
        </p>
      </Form>
    </Container>
  );
};
