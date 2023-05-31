import React from "react";
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <>
      <h1 className="title">Coming Soon...</h1>
      <button className="back_button" onClick={() => setIsLoggedIn(false)}>
        Voltar
      </button>
    </>
  );
};

export default LoggedIn;