import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css' 




class NavBar extends Component {

  render() {
    let navBarItems = [<NavItem className='navItem' key={1} href='/'>Home</NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem className='navItem' key={2} href='/logout' >Log Out</NavItem>)
      if (this.props.user != null) {
        navBarItems.push(<NavItem className='navItem' key={5} href='/profile'>{this.props.user.email}</NavItem>)
      }

    } else {
      navBarItems.push(<NavItem className='button' key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem className='button' key={4} href='/login'>Log In</NavItem>)
    }
    return (
      <div className='nav' >

        {navBarItems}
      </div>
    )
   
  }
  
}

export default NavBar
