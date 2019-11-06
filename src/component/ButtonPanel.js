import React from "react";
import Button from "./Button";
import '../App.css';

class ButtonPanel extends React.Component {

  render() {
    return (
      <div>
        <div className="Button">
          <Button buttonName="AC" color ='gray' />
          <Button buttonName="+/-" color ='gray'/>
          <Button buttonName="%" color ='gray'/>
          <Button buttonName="÷" />
        </div>

        <div className="Button">
          <Button buttonName="7" color ='gray'/>
          <Button buttonName="8" color ='gray'/>
          <Button buttonName="9" color ='gray'/>
          <Button buttonName="x" />
        </div>

        <div className="Button">
          <Button buttonName="4" color ='gray'/>
          <Button buttonName="5" color ='gray'/>
          <Button buttonName="6" color ='gray'/>
          <Button buttonName="-" />
        </div>

        <div className="Button">
          <Button buttonName="1" color ='gray'/>
          <Button buttonName="2" color='gray' />
          <Button buttonName="3" color ='gray'/>
          <Button buttonName="+" />
        </div>
        <div className="Button">
          <Button buttonName="0" color='gray' wide />
          <Button buttonName="." color ='gray'/>
          <Button buttonName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
