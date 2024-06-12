import React from "react";
import "./style/app.css"
import Navbar from "./components/navbar/navbar";
import { Article } from "./components/Article/Article";




/* Componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render */

class App extends React.Component {
  render(){ // método responsável por renderizar o conteúdo HTML do nosso componente render(){}

    return (
      <>
        <Navbar/>
        <Article/>
      </>
    )
  }
}

export default App;
