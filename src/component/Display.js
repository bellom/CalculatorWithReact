import React from "react";

function Display(props) {
  const { result } = props;

  return (
    <div className="Display setHeight">
      <p>{result}0</p>
    </div>
  );
}



Display.defaultProps = {
  result: '0'
};

export default Display;
