import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { Container, Form, Header, Divinput } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface IUser {
  name: string;
  CPF: string;
  email: string;
  password: string;
  course_module: string;
  contact: string;
  bio: string;
}

function Register() {
  const history = useHistory();
  const { registerPage } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Container>
        <Header>
          <img src={require("../../imgs/Logo.png")} alt="logo" />
          <button onClick={() => history.push("/")}>Voltar</button>
        </Header>
        <Form onSubmit={handleSubmit(registerPage)}>
          <div>
            <h1>Crie sua conta</h1>
            <h2>Rapido e grátis, vamos nessa</h2>
          </div>
          <Divinput>
            <label>Nome</label>
            <input placeholder="Digite aqui seu nome" {...register("name")} />
            {errors.name?.message && <h3>{errors.name?.message}</h3>}
          </Divinput>
          <Divinput>
            <label>Email</label>
            <input placeholder="Digite aqui seu Email" {...register("email")} />
            {errors.email?.message && <h3>{errors.email?.message}</h3>}
          </Divinput>
          <Divinput>
            <label>Senha</label>
            <input placeholder="Digite aqui seu Senha" type="password" />
            {errors.password?.message && <h3>{errors.password?.message}</h3>}
          </Divinput>
          <Divinput>
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("password")}
            />
            {errors.password?.message && <h3>{errors.password?.message}</h3>}
          </Divinput>
          <Divinput>
            <label>Bio</label>
            <input placeholder="Fale sobre você" {...register("bio")} />
            {errors.bio?.message && <h3>{errors.bio?.message}</h3>}
          </Divinput>
          <Divinput>
            <label>Contato</label>
            <input placeholder="Opção de contato" {...register("contact")} />
            {errors.contact?.message && <h3>{errors.contact?.message}</h3>}
          </Divinput>
          <Divinput>
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            {errors.course_module?.message && (
              <h3>{errors.course_module?.message}</h3>
            )}
          </Divinput>
          <button>Cadastrar</button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
