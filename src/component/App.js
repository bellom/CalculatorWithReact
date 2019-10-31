import React from "react";
import "./App.css";
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component{
  state = {
    result: '0'
  }

  render(){
    return (
      <div className="App">
        <Display result = {this.state.result} />
        <ButtonPanel />
    </div>
    )
  }
}



export default App;




































































