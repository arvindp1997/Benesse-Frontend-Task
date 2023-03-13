import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  changeState() {
    //ES6 Object Destructuring
    const { isLogginActive } = this.state;
  
    //We togglet component classes depending on the current active state 
    if (isLogginActive) {
      //Right side for login
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      //Left side for Register 
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    //Of course we need to toggel the isLogginActive by inversing it's previous state 
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
           
          </div>
          
        </div>
        <RightSide
            current={current}
            currentActive={isLogginActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
            />
      </div>
    );
  }
}

export default App;