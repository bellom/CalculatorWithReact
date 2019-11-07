import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component{

  state = {
    total: '',
    next: '',
    operation: ''
  };

  handleClick = buttonName => {
    this.setState(prevState => calculate(prevState, buttonName));
  };

  render() {

    const {total, next} = this.state;

    return (
      <div className='container'>
        <h1>Simple Web Calculator<sub><span> with React</span></sub></h1>
        <Display result={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}


export default App;

































































