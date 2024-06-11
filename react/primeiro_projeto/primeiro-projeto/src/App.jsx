import React from "react";
import foguete from "./assets/images/foguete.png"
import "./style/app.css"

/* Componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render */

class App extends React.Component {


  render(){ // método responsável por renderizar o conteúdo HTML do nosso componente render(){}
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={foguete} alt="" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Trending</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About us</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default App;
