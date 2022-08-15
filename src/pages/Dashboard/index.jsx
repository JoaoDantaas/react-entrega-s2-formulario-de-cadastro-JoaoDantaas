import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Container, Header, Risco, Welcome, Mensage } from "./styles";
import Logo from "../imgs/Logo.png";

function Dashboard() {
  const [name, setName] = useState("");
  const [module, setModule] = useState("");

  const history = useHistory();
  const userId = window.localStorage.getItem("@USERID");
  const token = window.localStorage.getItem("@TOKEN");

  axios
    .get(`https://kenziehub.herokuapp.com/users/${userId}`)
    .then((response) => {
      console.log(response.data);
      setName(response.data.name);
      setModule(response.data.course_module);
    })
    .catch((err) => console.log(err));

  function clear() {
    window.localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <Container>
        <Header>
          <img src={Logo} alt="logo" />
          <button onClick={clear}>Sair</button>
        </Header>
        <Risco></Risco>
        <Welcome>
          <h1>Óla, {name}</h1>
          <h2>{module}</h2>
        </Welcome>
        <Risco></Risco>
        <Mensage>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <h4>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h4>
        </Mensage>
      </Container>
    </>
  );
}

export default Dashboard;
