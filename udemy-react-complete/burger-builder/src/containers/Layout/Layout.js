import React, { Component } from 'react'
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  toggleSideDrawer = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <>
        <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer
          show={this.state.showSideDrawer}
          toggle={this.toggleSideDrawer}
        />
        <main className="Layout">{this.props.children}</main>
      </>
    )
  }
}

export default Layout
