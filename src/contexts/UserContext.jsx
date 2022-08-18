import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContext } from "./ToastContext";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [falseOrTrue, setFalseOrTrue] = useState(false);
  const { addToast } = useContext(ToastContext);

  const history = useHistory();

  useEffect(() => {
    async function reloadPage() {
      const token = window.localStorage.getItem("@TOKEN");

      if (token) {
        axios.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await axios
          .get("https://kenziehub.herokuapp.com/profile")
          .catch((err) => {
            console.log(err);
            window.localStorage.clear();
          });
        setUser(data);
      }
      setLoading(false);
    }
    setFalseOrTrue(true);
    reloadPage();
  }, [falseOrTrue]);

  const login = async (data) => {
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        addToast({
          type: "sucess",
          title: "Login realizado com sucesso!",
        });
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        history.push("/dashboard");
        const { user: userResponse } = response.data;
        setUser(userResponse);
      })
      .catch((err) =>
        addToast({
          type: "error",
          title: "Email ou senha incorretos",
        })
      );
  };

  const registerPage = async (data) => {
    await axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        addToast({
          type: "sucess",
          title: "Conta criada com sucesso!",
        });
        history.push("/");
      })
      .catch((err) => {
        addToast({
          type: "error",
          title: "Ops! Algo deu errado",
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
