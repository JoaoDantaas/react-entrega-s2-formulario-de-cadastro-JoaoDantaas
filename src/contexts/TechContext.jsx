import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { ToastContext } from "./ToastContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [techClick, setTechClick] = useState([]);
  const { falseOrTrue, setFalseOrTrue } = useContext(UserContext);
  const [save, setSave] = useState(true);
  const { addToast } = useContext(ToastContext);

  const createTech = async (data) => {
    await axios
      .post("https://kenziehub.herokuapp.com/users/techs", data)
      .then((response) => {
        addToast({
          type: "sucess",
          title: "Tecnologia criada com sucesso!",
        });
        setModalVisible(false);
        setFalseOrTrue(false);
      })
      .catch((err) => {
        addToast({
          type: "info",
          title: "Essa tecnologia já existe, você pode atualizá la",
        });
      });
  };

  const deleteTech = async (e) => {
    e.preventDefault();
    await axios.delete(
      `https://kenziehub.herokuapp.com/users/techs/${techClick}`
    );
    addToast({
      type: "sucess",
      title: "Tecnologia excluída com sucesso!",
    });
    setModalDelVisible(false);
    setFalseOrTrue(false);
  };

  const attTech = async (data) => {
    await axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${techClick}`, data)
      .then((response) => {
        addToast({
          type: "sucess",
          title: "Status atualizado com sucesso!",
        });
        setFalseOrTrue(false);
      })
      .catch((err) => console.log(err));
    setModalDelVisible(false);
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        modalVisible,
        setModalVisible,
        modalDelVisible,
        setModalDelVisible,
        techClick,
        setTechClick,
        deleteTech,
        attTech,
        save,
        setSave,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
