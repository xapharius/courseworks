import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = props => {
  const cssCls = ['SideDrawer']
  cssCls.push(props.show ? 'Open' : 'Close')
  return (
    <>
      <Backdrop show={props.show} onClick={props.toggle} />
      <div className={cssCls.join(' ')}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default sideDrawer
