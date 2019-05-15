import React from 'react';
import PropTypes from 'prop-types';

function ColorDisplay({ color }) {
  const divStyle = {
    background: color,
    height: '100px',
    width: '100px'
  };

  return (
    <div style={ divStyle }>
    </div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
