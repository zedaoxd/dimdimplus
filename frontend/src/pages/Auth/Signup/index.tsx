import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signup } from "../../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

const schema = z
  .object({
    name: z.string().min(3, "Nome muito curto").max(100, "Nome muito grande"),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(6, "Senha muito curta")
      .max(20, "Senha muito grande")
      .regex(/[a-z]/, "Senha deve conter uma letra minúscula")
      .regex(/[A-Z]/, "Senha deve conter uma letra maiúscula")
      .regex(/[0-9]/, "Senha deve conter um número")
      .regex(/[^a-zA-Z0-9]/, "Senha deve conter um caractere especial"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Senhas não conferem",
    path: ["passwordConfirmation"],
  });

type FormData = z.infer<typeof schema>;

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });
  const navigation = useNavigate();
  const { mutateAsync, isLoading } = useMutation(signup);

  const onSubmit = handleSubmit((data) => {
    mutateAsync(schema.parse(data)).then((res) => {
      if (res.status === 200) {
        toast.success("Cadastrado com sucesso");
        navigation("/auth/login");
      }
      reset();
    });
  });

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form onSubmit={onSubmit}>
        {errors.name && <p>{errors.name.message}</p>}
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          style={{ border: errors.name && "1px solid red" }}
        />

        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          style={{ border: errors.email && "1px solid red" }}
        />

        {errors.password && <p>{errors.password.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Senha"
          style={{ border: errors.password && "1px solid red" }}
        />

        {errors.passwordConfirmation && (
          <p>{errors.passwordConfirmation.message}</p>
        )}
        <input
          {...register("passwordConfirmation")}
          type="password"
          placeholder="Confirme a senha"
          style={{ border: errors.passwordConfirmation && "1px solid red" }}
        />
        <button type="submit" disabled={!isValid || isLoading}>
          {isLoading ? <PulseLoader color="white" /> : "Cadastrar"}
        </button>
        <div>
          <p>
            Já tem conta? <Link to="/auth/login">entre</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};
