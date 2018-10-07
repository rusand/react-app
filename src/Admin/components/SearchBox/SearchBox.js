import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.less';

const cn = classnames.bind(style);

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  onSearch= () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.text);
    }
  }

  render() {
    return <div className={style.search}>
      <input placeholder={this.props.placeholder} onChange={(value) => this.setState({text: value})}/>
      <span className={cn('fa-search', 'fa', style.fa_search)} onClick={() => this.onSearch()}></span>
    </div>;
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
};

export default SearchBox;
