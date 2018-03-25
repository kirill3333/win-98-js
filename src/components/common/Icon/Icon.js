import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  width = 16,
  height = 16,
  path,
  color = '#ffffff',
  viewBox = '0 0 512 512',
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      style={{ fill: color, padding: '1px' }}
    >
      <path d={path} />
    </svg>
  );
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  path: PropTypes.string,
  color: PropTypes.string,
  viewBox: PropTypes.string,
};

export default Icon;
