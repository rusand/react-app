import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';

class AddressGetter extends React.Component {
  render() {
    return <Fragment>
      <div className={style.topBlock}></div>
      <div className={style.mainBlock}>
        <div className={style.greeting}>Home address</div>
        <div>Please enter the director’s home address for the last 3 years.</div>
        <div className={style.splitter}></div>
      </div>
    </Fragment>;
  }
}

AddressGetter.propTypes = {
};

export default AddressGetter;
