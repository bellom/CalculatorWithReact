import React from "react";

function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      <button>{ buttonName }</button>
    </div>
  );
}

export default Button;
