import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName, color, wide } = props;
  const buttonColor = color === "grey" ? "grey" : "orange"
  const buttonWide = wide ? "50%" : ""
  console.log(wide)
  return (
    <button 
      className="Button" 
      style={{backgroundColor: buttonColor, width: buttonWide}}
    >{buttonName}
    </button>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

Button.propTypes = {
  buttonName: PropTypes.string
};


export default Button;

