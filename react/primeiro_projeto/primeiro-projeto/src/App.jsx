import React from "react";
import "./style/app.css"
import Navbar from "./components/navbar/navbar";
import { Article } from "./components/Article/Article";
import dashboard from "./assets/images/dashboard.png" ;
import malayalam from "./assets/images/malayalam.jpeg";
import retratovibrante from "./assets/images/retratovibrante.jpeg";
import muralpanteranegra from "./assets/images/2020-09-25-mural-pantera-negra-disney.webp";
import Counter from "./components/Counter/Counter";




/* Componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render */

class App extends React.Component {
  render(){ // método responsável por renderizar o conteúdo HTML do nosso componente render(){}

    return (
      <>
        <Navbar/>
        <Counter>{}</Counter>
        <section className="articles">
        <Article title="Designing Dashboard" provider="NASA" description="A eficiência de um produto digital vai além do processo de desenvolvimento. Isso porque, é necessário criar maneiras de acompanhar seu desempenho e também oferecer ao usuário final ferramentas de análise e observação." thumbnail={dashboard}/>
        <Article title="Retratos vibrantes de 2020" provider="SpaceNews" description="David Ayllon é muitas coisas: diretor criativo, designer gráfico, fotógrafo e, talvez o mais importante, um aficionado por super-heróis. Desde muito novo, David já era vidrado nas histórias em quadrinhos e na luta livre profissional e, com o tempo, acabou desenvolvendo uma paixão por mundos fantásticos e seus personagens incríveis." thumbnail={retratovibrante}/>
        <Article title="36 Days of Malayalam type" provider="SpaceFlight Now" description="A origem do Malayalam continua sendo uma questão controversa entre os estudiosos. A visão dominante sustenta que o Malayalam descende do antigo Tamil Médio e se separou dele em algum momento entre os séculos IX e XIII." thumbnail={malayalam}/>
        <Article title="Mural Pantera Negra" provider="Disney" description="Chadwick Aaron Boseman (Anderson, 29 de novembro de 1976 — Los Angeles, 28 de agosto de 2020) foi um ator,[5] diretor[5] e roteirista[5] norte-americano. Ele era mais conhecido por seus retratos de figuras históricas da vida real, como Jackie Robinson em 42 (2013), James Brown em Get on Up - A História de James Brown (2014) e Thurgood Marshall em Marshall (2017), e por seu retrato como T'Challa / Pantera Negra no Universo Cinematográfico Marvel, nos filmes Captain America: Civil War (2016), Black Panther (2018), Avengers: Infinity War (2018), Avengers: Endgame (2019) e fornecendo a sua voz na série animada What If...? (2021). Ele também estrelou filmes como 21 Bridges (2019), Da 5 Bloods (2020) e Ma Rainey's Black Bottom (2020), seu último filme." thumbnail={muralpanteranegra}/>
        </section>
      </>
    )
  }
}

export default App;
