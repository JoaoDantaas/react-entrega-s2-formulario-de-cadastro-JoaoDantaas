import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { Blur, Header, Form, Div } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";

function AddModal() {
  const {} = useContext(UserContext);
  const { createTech, modalVisible, setModalVisible } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    modalVisible && (
      <>
        <Blur>
          <Form onSubmit={handleSubmit(createTech)}>
            <Header>
              <h1>Cadastrar Tecnologia</h1>
              <button onClick={() => setModalVisible(false)}>X</button>
            </Header>
            <Div>
              <h2>Nome</h2>
              <input type="text" {...register("title")} />
              <h3>{errors.title?.message}</h3>
              <h2>Selecionar status</h2>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <h3>{errors.status?.message}</h3>
            </Div>
            <button>Cadastrar Tecnologia</button>
          </Form>
        </Blur>
      </>
    )
  );
}

export default AddModal;
