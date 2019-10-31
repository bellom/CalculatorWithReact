import React from "react";
import Button from "./Button";
import '../App.css';

class ButtonPanel extends React.Component {

  render() {
    return (
      <div>
        <div className="Button">
          <Button buttonName="AC" color='grey'/>
          <Button buttonName="+/-" color='grey' />
          <Button buttonName="%" color='grey' />
          <Button buttonName="÷" />
        </div>

        <div className="Button">
          <Button buttonName="7" color='grey' />
          <Button buttonName="8" color='grey' />
          <Button buttonName="9" color='grey' />
          <Button buttonName="x" />
        </div>

        <div className="Button">
          <Button buttonName="4" color='grey' />
          <Button buttonName="5" color='grey' />
          <Button buttonName="6" color='grey' />
          <Button buttonName="-" />
        </div>

        <div className="Button">
          <Button buttonName="1" color='grey' />
          <Button buttonName="2" color='grey' />
          <Button buttonName="3" color='grey' />
          <Button buttonName="+" />
        </div>
        <div className="Button">
          <Button buttonName="0" color='grey' wide />
          <Button buttonName="." color='grey'/>
          <Button buttonName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
