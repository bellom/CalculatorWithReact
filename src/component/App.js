import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component{

  state = {
    total: '',
    next: null,
    operation: null
  };

  handleClick = (buttonName) => {

    let data = calculate(this.state, buttonName);

    this.setState({
      total: data.total,
      next: data.next,
      operation: data.operation
    });
  };


  render() {

    const {total, next, operation} = this.state;

    return (
      <div className='container'>
        <h1>Simple Web Calculator</h1>
        <Display result = {total} operation = {operation} next = {next} />
        <ButtonPanel clickHandler = { this.handleClick } />
      </div>
    )
  }
}


export default App;

































































