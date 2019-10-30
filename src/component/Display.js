import React from "react";

function Display(props) {
  const { result } = props;

  return (
    <div>
      <h3>Display Component</h3>
      <p>{result}</p>
    </div>
  );
}

export default Display;
