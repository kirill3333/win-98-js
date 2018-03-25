import React from 'react';
import PropTypes from 'prop-types';
import css from './style.css';

const Panel = ({ width, height, children }) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={css.panel}
    >
      {children}
    </div>
  );
};

Panel.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.any,
};

export default Panel;
