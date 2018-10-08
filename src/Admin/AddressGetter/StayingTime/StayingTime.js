import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';
import SearchBox from '../../components/SearchBox/SearchBox'
import DropDownBox from '../../components/DropDownBox/DropDownBox'

class StayingTime extends React.Component {
  onSearch = (e) => {
    alert(e);
  }

  render() {
    return <Fragment>
      <div className={style.searchBox}><SearchBox placeholder={'Zip code'} onSearch={this.onSearch} text={'serach text'} /></div>
      <div className={style.searchBox}><DropDownBox placeholder={'Zip code'} onSearch={this.onSearch} /></div>
    </Fragment>;
  }
}

StayingTime.propTypes = {
};

export default StayingTime;
