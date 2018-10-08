import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.less';

const cn = classnames.bind(style);

class SearchBox extends React.Component {
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
    return <div className={style.search}>
      <div className={style.searchInput}>
        <input placeholder={this.props.placeholder} onChange={this.onChange} onKeyPress={this.onKeyPress} value={this.state.text} />
      </div>
      <span className={cn('fa-search', 'fa', style.fa_search)} onClick={() => this.onSearch()}></span>
    </div>;
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onSearch: PropTypes.func
};

export default SearchBox;
