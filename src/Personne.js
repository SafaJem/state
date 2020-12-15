import React from "react";
import image from "./devp.jpg"
class Personne extends React.Component {

constructor() {
    console.log("constructor()");
    super();
    this.state = {
      fullName:"Safa Jemaiel",
      bio:"I'am a FullStack Js student in Go My Code:",
      profession:"Développeur FullStack JS",
      timer: 0,
      intervall: null
    };
  }
  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }
 
  render() {

  return (
    <div>
     <h1>FullName: {this.state.fullName}</h1>
     <p>{this.state.bio}</p>
     <ul>
        <li>Know how to integrate a model. </li>
        <li>Mastering HTML, CSS, JavaScript and Node.JS languages. </li>
        <li>Know how to develop an application with the React. </li>
        <li>Mastering jQuery, Bootstrap, React and Git.</li>
      </ul>
     <img src={image} alt="profile" style={{width:350 , height:250}}/>
     <h1>Profession: {this.state.profession}</h1>
     <p>{this.state.timer}</p>
    </div>
  );
}
}
export default Personne;