import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import TechProvider, { TechContext } from "./contexts/TechContext";
import ToastContainer from "./components/ToastConteiner";
import ToastProvider from "./contexts/ToastContext";

function App() {
  //const [create, setCreate] = useState(true);

  return (
    <>
      <ToastProvider>
        <UserProvider>
          <TechProvider>
            <ToastContainer />
            <div>
              <Switch>
                <Route exact path={"/"}>
                  <Login />
                </Route>
                <Route exact path={"/register"}>
                  <Register />
                </Route>
                <Route exact path={"/dashboard"}>
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </TechProvider>
        </UserProvider>
      </ToastProvider>
    </>
  );
}

export default App;
