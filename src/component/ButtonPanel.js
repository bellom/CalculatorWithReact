import React from "react";
import Button from "./Button";
import '../App.css';

class ButtonPanel extends React.Component {

  render() {
    return (
      <div>
        <div className="Button row">
          <Button name="AC" color='grey'/>
          <Button name="+/-" color='grey' />
          <Button name="%" color='grey' />
          <Button name="÷" />
        </div>

        <div className="Button row">
          <Button name="7" color='grey' />
          <Button name="8" color='grey' />
          <Button name="9" color='grey' />
          <Button name="x" />
        </div>

        <div className="Button row">
          <Button name="4" color='grey' />
          <Button name="5" color='grey' />
          <Button name="6" color='grey' />
          <Button name="-" />
        </div>

        <div className="Button row">
          <Button name="1" color='grey' />
          <Button name="2" color='grey' />
          <Button name="3" color='grey' />
          <Button name="+" />
        </div>
        <div className="Button row">
          <Button name="0" color='grey' wide />
          <Button name="." color='grey'/>
          <Button name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
