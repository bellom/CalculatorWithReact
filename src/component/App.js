import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component{

  state = {
    total: '',
    next: null,
    operation: null,
    error: null
  };

  handleClick = buttonName => {
    this.setState(prevState => calculate(prevState, buttonName));
  };


  render() {

    const {total, next, error} = this.state;

    return (
      <div className='container'>
        <h1>Simple Web Calculator</h1>
        <Display result={total} next={next} error={error} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}


export default App;

































































