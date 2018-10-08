import React, { Fragment } from 'react';
import StayingTime from './StayingTime/StayingTime'
import style from './style.less';
import Button from '../components/Button/Button';

class AddressGetter extends React.Component {
  render() {
    return <Fragment>
      <div className={style.topBlock}></div>
      <div className={style.mainBlock}>
        <div className={style.greeting}>Home address</div>
        <div>Please enter the director’s home address for the last 3 years.</div>
        <div className={style.splitter}></div>
        <div><StayingTime /></div>
        <div><Button /></div>
      </div>
    </Fragment>;
  }
}

export default AddressGetter;
