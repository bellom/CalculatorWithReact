import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  const { name, color, wide, handleClick} = props;
  const buttonColor = color
  const buttonWide = wide ? '50%' : ''
  const clickHandler = () => handleClick(name);

  return (
    <button 
      className='Button' 
      style={{backgroundColor: buttonColor, width: buttonWide}}
      onClick = { clickHandler }
    >{ name }
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
