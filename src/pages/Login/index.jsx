import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { Container, Form, ButtonJoin, ButtonRegister } from "./styles";
import Logo from "../../imgs/Logo.png";
import { UserContext } from "../../contexts/UserContext";

function Login() {
  const { login, user } = useContext(UserContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <Form onSubmit={handleSubmit(login)}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input placeholder="Digite aqui seu email" {...register("email")} />
            <h3>{errors.email?.message}</h3>
          </div>
          <div>
            <label>Senha</label>
            <input
              type={"password"}
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <h3>{errors.password?.message}</h3>
          </div>
          <ButtonJoin>Entrar</ButtonJoin>
          <h2>Ainda não possui uma conta?</h2>
          <ButtonRegister onClick={() => history.push("/register")}>
            Cadastre-se
          </ButtonRegister>
        </Form>
      </Container>
    </>
  );
}

export default Login;
