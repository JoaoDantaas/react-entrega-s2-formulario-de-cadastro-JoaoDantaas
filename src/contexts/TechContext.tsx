import axios from "axios";
import { createContext, useContext, useState, ReactNode } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  createTech: (data: any) => Promise<void>;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalDelVisible: boolean;
  setModalDelVisible: React.Dispatch<React.SetStateAction<boolean>>;
  techClick: never[];
  setTechClick: React.Dispatch<React.SetStateAction<never[]>>;
  deleteTech: (e: any) => Promise<void>;
  attTech: (data: any) => Promise<void>;
  save: boolean;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TechContext = createContext({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [techClick, setTechClick] = useState([]);
  const { falseOrTrue, setFalseOrTrue } = useContext(UserContext);
  const [save, setSave] = useState(true);
  //const { addToast } = useContext(ToastContext);

  const createTech = async (data: any) => {
    await axios
      .post("https://kenziehub.herokuapp.com/users/techs", data)
      .then((response) => {
        toast.success("Tecnologia criada com sucesso!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log(response);
        setModalVisible(false);
        setFalseOrTrue(false);
      })
      .catch((err) => {
        toast.info("Essa tecnologia já existe, você pode atualizá la", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log(err);
      });
  };

  const deleteTech = async (e: any) => {
    e.preventDefault();
    await axios.delete(
      `https://kenziehub.herokuapp.com/users/techs/${techClick}`
    );
    toast.success("Tecnologia excluída com sucesso!", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setModalDelVisible(false);
    setFalseOrTrue(false);
  };

  const attTech = async (data: any) => {
    await axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${techClick}`, data)
      .then((response) => {
        toast.success("Status atualizado com sucesso!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
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
