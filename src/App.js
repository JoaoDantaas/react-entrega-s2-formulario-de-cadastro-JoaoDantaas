import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  //const [create, setCreate] = useState(true);

  return (
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
  );
}

export default App;
