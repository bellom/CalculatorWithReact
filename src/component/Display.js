import React from 'react';
import PropTypes from 'prop-types'


const Display = (props) => {
  const { result, next, error} = props;

  return (
    <div className='Display'>
      { next || result || error || '0' }
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
