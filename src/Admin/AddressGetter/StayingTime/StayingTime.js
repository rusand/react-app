import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';
import SearchBox from '../../components/SearchBox/SearchBox'

class StayingTime extends React.Component {
  onSearch = () => {
    alert(1);
  }

  render() {
    return <Fragment>
      <SearchBox placeholder={'Zip code'} onSearch={this.onSearch} />
    </Fragment>;
  }
}

StayingTime.propTypes = {
};

export default StayingTime;
