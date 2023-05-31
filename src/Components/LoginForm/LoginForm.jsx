import React, { useState } from "react";
import "./LoginForm.css";
import Card from "../Card/Card";
import { database } from "../../utils/database";

const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Usuário inválido",
    password: "Senha inválida",
    noUsername: "Digite seu usuário",
    noPassword: "Digite sua senha",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    const currentUser = database.find((user) => user.username === username);
    if (currentUser) {
      if (currentUser.password !== password) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Darf / AD</h1>
      <p className="subtitle">
        Entre com usuário e senha!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <input type="submit" value="Login" className="login_button" />
      </form>
    </Card>
  );
};

export default LoginForm;