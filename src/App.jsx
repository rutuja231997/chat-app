import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";

function App() {
  return (
    <div>
      <h1>App</h1>
      <Home /> <Login /> <Register />
    </div>
  );
}

export default App;
