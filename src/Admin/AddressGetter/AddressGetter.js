import React, { Fragment } from 'react';
import StayingTime from './StayingTime/StayingTime'
import style from './style.less';
import Button from '../components/Button/Button';
import Dropdown from '../components/DropDownComponents/Dropdown'
//import DropDownBox from '../components/DropDownBox/DropDownBox';

const list = [
  {
    id: 0,
    title: 'New York',
    selected: false,
    key: 'location'
  },
  {
    id: 1,
    title: 'Dublin',
    selected: false,
    key: 'location'
  },
  {
    id: 2,
    title: 'California',
    selected: false,
    key: 'location'
  },
  {
    id: 3,
    title: 'Istanbul',
    selected: false,
    key: 'location'
  },
  {
    id: 4,
    title: 'Izmir',
    selected: false,
    key: 'location'
  },
  {
    id: 5,
    title: 'Oslo',
    selected: false,
    key: 'location'
  }
]

class AddressGetter extends React.Component {

  onSelectedAddress = (item) => {
    console.log(item);
  }

  render() {
    return <Fragment>
      <div className={style.topBlock}></div>
      <div className={style.mainBlock}>
        <div className={style.greeting}>Home address</div>
        <div>Please enter the director’s home address for the last 3 years.</div>
        <div className={style.splitter}></div>
        <div><StayingTime /></div>
        <div className={style.continueBtn}><Button text={`Confirm and continue`}/></div>
        <div className={style.continueBtn}><Dropdown title={`Select address`} list={list} resetThenSet={this.onSelectedAddress}/></div>
      </div>
    </Fragment>;
  }
}

export default AddressGetter;
