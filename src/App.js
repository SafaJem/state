import React from "react";
import './App.css';
import Personne from "./Personne";

class App extends React.Component {
  constructor() {
    console.log("constructor()");
    super();
    this.state = {
    show:false
    }
    };

  Show = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {

  return (
    <div className="App">
     <hr />
      <button className="visibility-btn" onClick={this.Show}>
        {this.state.show ? "Hide profile " : "Show profile"}
      </button>
      {this.state.show && <Personne />}

    </div>
  );
}
}
export default App;