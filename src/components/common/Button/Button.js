import React from 'react';
import PropTypes from 'prop-types';
import css from './style.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown() {
    this.setState({ clicked: true })
  }

  onMouseUp() {
    this.setState({ clicked: false })
  }

  render() {
    const { width, height, title, style, ...args } = this.props;
    const computedStyle = Object.assign({}, { width: `${width}px`, height: `${height}px` }, style);
    return (
      <a
        style={computedStyle}
        className={`${this.state.clicked ? css.clicked : css.not_clicked}`}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        {...args}
      >
        {title}
      </a>
    );
  }
}

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
};

export default Button;
