import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.less';

const cn = classnames.bind(style);

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  onSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.text);
    }
  }

  onChange = (event) => {
    this.setState({text: event.target.value});
  }

  onKeyPress = (event) => {
    if(event.charCode === 13){
        this.onSearch();
    }
  }

  render() {
    return <div className={style.button}>
      Conﬁrm and continue
    </div>;
  }
}

Button.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
  onSearch: PropTypes.func
};

export default Button;
