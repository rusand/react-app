import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'
import onClickOutside from "react-onclickoutside";
import classnames from 'classnames/bind';
import style from './style.less';

const cn = classnames.bind(style);

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(e){
    this.setState({
      listOpen: false
    })
  }

  selectItem = (title, id, stateKey) => {
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey))
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className={style['dd-wrapper']}>
        <div className={style['dd-header']} onClick={this.toggleList}>
          <div className={style['dd-header-title']}>{headerTitle}</div>
          {listOpen
            ? <FontAwesome name="angle-up" size="2x"/>
            : <FontAwesome name="angle-down" size="2x"/>
          }
        </div>
        {listOpen && <ul className={cn(style['dd-ul'], style['dd-list'])}>
          {list.map((item)=> (
            <li className={cn(style['dd-li'], style['dd-list-item'])} key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  list: PropTypes.object,
  resetThenSet: PropTypes.func
};

export default onClickOutside(Dropdown);
