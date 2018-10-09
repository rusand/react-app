import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.less';

const cn = classnames.bind(style);

class Button extends React.Component {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  onKeyPress = (event) => {
    if(event.charCode === 13){
        this.onClick();
    }
  }

  render() {
    // return <div className={style.buttonWrapper}>
    //   <div className={style.buttonText}>{this.props.text}</div>
    // </div>;
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
