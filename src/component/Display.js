import React from "react";

function Display(props) {
  const { result } = props;

  return (
    <div className="Display">
      <p>{result}0</p>
    </div>
  );
}

export default Display;
