import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  const { name, color, wide } = props;
  const buttonColor = color
  const buttonWide = wide ? '50%' : ''

  return (
    <button 
      className='Button' 
      style={{backgroundColor: buttonColor, width: buttonWide}}
    >{name}
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

