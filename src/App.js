import React from "react";
import Profile from "./Profile";
import "./App.css";
import Time from './Time';



class App extends React.Component {
  constructor() {
    
    super();
    
    this.state = {
      show: false,
      Person: {
        fullName: "Aymen Ghorbel",
        bio: "Geological engineer",
        imgSrc: "logo110.png",
        profession: "Web developer",
      },
      val: "Profile",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={()=>this.setState({show : !this.state.show,})}>
            {this.state.val}
            </button>
          </div>
          <Profile
            fullName={this.state.show ? this.state.Person.fullName : ""}
            bio={this.state.show ? this.state.Person.bio:""}
            imgSrc={this.state.show ? this.state.Person.imgSrc:""}
            profession={this.state.show ? this.state.Person.profession:""}
          />
          <Time/>
        </header>
      </div>
    );
  }
}

export default App;