import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';
import SearchBox from '../../components/SearchBox/SearchBox'

class StayingTime extends React.Component {
  onSearch = (e) => {
    alert(e);
  }

  render() {
    return <Fragment>
      <div className={style.searchBox}><SearchBox placeholder={'Zip code'} onSearch={this.onSearch} text={'serach text'} /></div>
    </Fragment>;
  }
}

StayingTime.propTypes = {
};

export default StayingTime;
