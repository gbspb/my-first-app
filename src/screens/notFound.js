import React from "react";
import Planet from "../components/planet";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div>
      <h1>Erro 404</h1>
      <h3>Página não encontrada!</h3>
      <Link to='/'>Voltar ao início</Link>
    </div>
  )
}

export default NotFoundScreen;