import React from 'react';
import Button from './Button';
import '../App.css';

const ButtonPanel = ({ clickHandler }) => {

    return (
      <div>
        <div className='Button'>
          <Button handleClick = { clickHandler } name='AC' color ='gray' />
          <Button handleClick = { clickHandler } name='+/-' color ='gray'/>
          <Button handleClick = { clickHandler } name='%' color ='gray'/>
          <Button handleClick = { clickHandler } name='÷' />
        </div>

        <div className='Button'>
          <Button handleClick = { clickHandler } name='7' color ='gray'/>
          <Button handleClick = { clickHandler } name='8' color ='gray'/>
          <Button handleClick = { clickHandler } name='9' color ='gray'/>
          <Button handleClick = { clickHandler } name='x' />
        </div>

        <div className='Button'>
          <Button handleClick = { clickHandler } name='4' color ='gray'/>
          <Button handleClick = { clickHandler } name='5' color ='gray'/>
          <Button handleClick = { clickHandler } name='6' color ='gray'/>
          <Button handleClick = { clickHandler } name='-' />
        </div>

        <div className='Button'>
          <Button handleClick = { clickHandler } name='1' color ='gray'/>
          <Button handleClick = { clickHandler } name='2' color='gray' />
          <Button handleClick = { clickHandler } name='3' color ='gray'/>
          <Button handleClick = { clickHandler } name='+' />
        </div>
        <div className='Button'>
          <Button handleClick = { clickHandler } name='0' color='gray' wide />
          <Button handleClick = { clickHandler } name='.' color ='gray'/>
          <Button handleClick = { clickHandler } name='=' />
        </div>
      </div>
    );
}

export default ButtonPanel;
