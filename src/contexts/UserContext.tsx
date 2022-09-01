import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Key,
  SetStateAction,
} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  user: any;
  login: (data: any) => Promise<void>;
  loading: boolean;
  registerPage: (data: any) => Promise<void>;
  falseOrTrue: boolean;
  setFalseOrTrue: React.Dispatch<React.SetStateAction<boolean>>;
  techs: ITechs[];
  setTechs: React.Dispatch<React.SetStateAction<ITechs[]>>;
}

interface ITechs {
  id: any;
  status: ReactNode;
  title: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [falseOrTrue, setFalseOrTrue] = useState(false);
  //const { addToast } = useContext(ToastContext);
  const [techs, setTechs] = useState<ITechs[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function reloadPage() {
      const token = window.localStorage.getItem("@TOKEN");

      if (token) {
        axios.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data }: any = await axios
          .get("https://kenziehub.herokuapp.com/profile")
          .catch((err) => {
            console.log(err);
            window.localStorage.clear();
          });
        setUser(data);
        setTechs(data.techs);
      }
      setLoading(false);
    }
    setFalseOrTrue(true);
    reloadPage();
  }, [falseOrTrue]);

  const login = async (data: any) => {
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        toast.success("Login efetuado com sucesso!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });

        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        history.push("/dashboard");
        const { user: userResponse } = response.data;
        setUser(userResponse);
        setTechs(userResponse.techs);
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const registerPage = async (data: any) => {
    await axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push("/");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado", {
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

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        loading,
        registerPage,
        falseOrTrue,
        setFalseOrTrue,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
