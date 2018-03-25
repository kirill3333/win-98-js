import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/common/Panel';
import Button from 'components/common/Button';
import css from './style.css';

class Window extends React.Component {
  render() {
    const { width, height, children } = this.props;
    return (
      <Panel width={width} height={height}>
        <div className={css.container}>
          <div className={css.title_container}>
            <div className={css.title}>
              <span>Desktop themes</span>
            </div>
            <div className={css.buttons_container}>
              <Button width={12} height={12} />
              <Button width={12} height={12} />
              <Button width={12} height={12} />
            </div>
          </div>
          {children}
        </div>
      </Panel>
    );
  }
}

Window.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Window;
