import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, ButtonJoin, ButtonRegister } from "./styles";
import Logo from "../imgs/Logo.png";

function Login() {
  //const [loading, setLoading] = useState(true);
  //const [user, setUser] = useState(true);

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

  const onSubmit = async (user) => {
    console.log(user);

    await axios
      .post("https://kenziehub.herokuapp.com/sessions", user)
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <Form onSubmit={handleSubmit(onSubmit)}>
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
