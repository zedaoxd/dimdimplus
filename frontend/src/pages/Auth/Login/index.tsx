import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { PulseLoader } from "react-spinners";

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    signIn(data)
      .then((r) =>
        r === 200
          ? navigate("/profile")
          : setError("Usuário ou senha inválidos")
      )
      .finally(() => setIsLoading(false));
  });

  return (
    <Container>
      <h1>Entre agora!</h1>
      {error && <p>{error}</p>}
      <Form onSubmit={onSubmit}>
        <input {...register("email")} type="text" placeholder="Email" />
        <input {...register("password")} type="password" placeholder="Senha" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? <PulseLoader color="white" /> : "Entrar"}
        </button>

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
