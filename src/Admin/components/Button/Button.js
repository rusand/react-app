import React from 'react';
import PropTypes from 'prop-types';
import style from './style.less';

class Button extends React.Component {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return <button className={style.button}>
      {this.props.text}
    </button>;
  }
}

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
