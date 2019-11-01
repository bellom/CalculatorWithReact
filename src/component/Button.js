import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
  
  const { buttonName } = props;

  return (
    <div>
      <button>{ buttonName }</button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string
};


export default Button;
