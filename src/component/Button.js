import React from "react";

function Button(props) {
  const { buttonName, color, wide } = props;
  const buttonColor = color === "grey" ? "grey" : "orange"
  const buttonWide = wide ? "50%" : ""
  
  return (
    <button 
      className="Button" 
      style={{backgroundColor: buttonColor, width: buttonWide}}
    >{buttonName}
    </button>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

export default Button;

