import React from "react";
import PropTypes from 'prop-types';

function Button(props) {

  const { buttonName, color, wide } = props;
  const buttonColor = color
  const buttonWide = wide ? "50%" : ""

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

Button.defaultProps = {
  color: 'orange'
};

export default Button;

