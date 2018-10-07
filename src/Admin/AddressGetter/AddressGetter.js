import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';
// require('./style.less')

class AddressGetter extends React.Component {
  render() {
    console.log(style);
    return <Fragment>
      <div className={style.topBlock}></div>
      <div className={style.mainBlock}>Main content</div>
    </Fragment>;
  }
}

AddressGetter.propTypes = {
};

export default AddressGetter;
