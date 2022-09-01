import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import TechProvider, { TechContext } from "./contexts/TechContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
