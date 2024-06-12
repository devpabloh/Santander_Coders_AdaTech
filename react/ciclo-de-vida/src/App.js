import React from "react";

export class  App extends React.Component {
  constructor(){
    super();

    this.state = {showCounter: false};
  }
  render(){
    return (
      <div>
        <h1>Ciclo de vida no react</h1>

        <button onClick={()=>{
          this.setState({showCounter: !this.state.showCounter})
        }}>Mostrar contador</button>
      </div>
    )
  }
}

export default App;
