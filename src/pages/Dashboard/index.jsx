import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import {
  Container,
  Header,
  Risco,
  Welcome,
  List,
  Reload,
  HeaderTech,
  Tech,
} from "./styles";
import Logo from "../../imgs/Logo.png";
import { UserContext } from "../../contexts/UserContext";
import AddModal from "../AddModal";
import { TechContext } from "../../contexts/TechContext";
import DeleteModal from "../DeleteModal";

function Dashboard() {
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const { user, loading } = useContext(UserContext);
  const { setModalVisible, setModalDelVisible, setTechClick, save, setSave } =
    useContext(TechContext);

  const history = useHistory();
  const userId = window.localStorage.getItem("@USERID");
  const token = window.localStorage.getItem("@TOKEN");

  axios
    .get(`https://kenziehub.herokuapp.com/users/${userId}`)
    .then((response) => {
      setName(response.data.name);
      setModule(response.data.course_module);
    })
    .catch((err) => console.log(err));

  function clear() {
    window.localStorage.clear();
    history.push("/");
  }

  if (loading)
    return (
      <Reload>
        <img
          src="https://www12.senado.leg.br/jovemsenador/home/imagens/carregando/@@images/image.gif"
          alt="carregando"
        />
      </Reload>
    );

  return user ? (
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
        <HeaderTech>
          <h1>Tecnologias</h1>
          <button onClick={() => setModalVisible(true)}>+</button>
        </HeaderTech>
        <List>
          {user.techs.length > 0 ? (
            user.techs.map((elem) => {
              return (
                <Tech
                  onClick={() => {
                    setModalDelVisible(true);
                    setSave(true);
                    setTechClick(elem.id);
                  }}
                  key={elem.id}
                >
                  <h2>{elem.title}</h2>
                  <h3>{elem.status}</h3>
                </Tech>
              );
            })
          ) : (
            <>
              <h4>Você ainda não tem nenhuma Tecnologia cadastrada :(</h4>
            </>
          )}
        </List>
      </Container>
      <AddModal />
      <DeleteModal />
    </>
  ) : (
    history.push("/")
  );
}

export default Dashboard;
