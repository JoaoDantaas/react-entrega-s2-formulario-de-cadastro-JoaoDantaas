import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import {
  Blur,
  Header,
  Form,
  Div,
  DivButton,
  ButtonSave,
  ButtonDel,
} from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";

function DeleteModal() {
  const {
    deleteTech,
    modalDelVisible,
    setModalDelVisible,
    techClick,
    attTech,
    save,
    setSave,
  } = useContext(TechContext);
  const { user } = useContext(UserContext);

  const formSchema = yup.object().shape({
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    modalDelVisible && (
      <>
        <Blur>
          <Form>
            <Header>
              <h1>Tecnologia Detalhes</h1>
              <button
                onClick={(e) => {
                  setModalDelVisible(false);
                }}
              >
                X
              </button>
            </Header>
            <Div>
              <h2>Nome do projeto</h2>
              <input
                type="text"
                placeholder={
                  user.techs.find((tech) => tech.id === techClick).title
                }
                disabled
              />
              <h2>Status</h2>
              <select
                onChangeCapture={() => setSave(false)}
                {...register("status")}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </Div>
            <DivButton>
              <ButtonSave
                disabled={save}
                saves={save}
                onClick={handleSubmit(attTech)}
              >
                Salvar alterações
              </ButtonSave>
              <ButtonDel onClick={deleteTech}>Excluir</ButtonDel>
            </DivButton>
          </Form>
        </Blur>
      </>
    )
  );
}

export default DeleteModal;
