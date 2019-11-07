import React from 'react';
import PropTypes from 'prop-types'


const Display = (props) => {
  const { result, next} = props;

  return (
    <div className='Display'>
      { next || result || '0' }
    </div>
  );
}



Display.defaultProps = {
  result: '0'
};

Display.propTypes = {
  result: PropTypes.string.isRequired
};

export default Display;
