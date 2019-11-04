import React from "react";

function Button(props) {
  const { name, color, wide } = props;
  const buttonColor = color === "grey" ? "grey" : "orange"
  const buttonWide = wide ? "50%" : ""
  
  return (
    <button 
      className="Button" 
      style={{backgroundColor: buttonColor, width: buttonWide}}
    >{name}
    </button>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

export default Button;

