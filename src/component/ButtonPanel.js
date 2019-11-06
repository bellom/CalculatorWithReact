import React from 'react';
import Button from './Button';
import '../App.css';

class ButtonPanel extends React.Component {

  render() {
    return (
      <div>
        <div className='Button'>
          <Button name='AC' color ='gray' />
          <Button name='+/-' color ='gray'/>
          <Button name='%' color ='gray'/>
          <Button name='÷' />
        </div>

        <div className='Button'>
          <Button name='7' color ='gray'/>
          <Button name='8' color ='gray'/>
          <Button name='9' color ='gray'/>
          <Button name='x' />
        </div>

        <div className='Button'>
          <Button name='4' color ='gray'/>
          <Button name='5' color ='gray'/>
          <Button name='6' color ='gray'/>
          <Button name='-' />
        </div>

        <div className='Button'>
          <Button name='1' color ='gray'/>
          <Button name='2' color='gray' />
          <Button name='3' color ='gray'/>
          <Button name='+' />
        </div>
        <div className='Button'>
          <Button name='0' color='gray' wide />
          <Button name='.' color ='gray'/>
          <Button name='=' />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
