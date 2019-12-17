import React, { Component } from 'react'
import './Profile.css'
import Goal from '../Goal/Goals.js'

class Profile extends Component {
  render() {
    if (this.props.user != null) {
      return (
        <div>
          <h4>{this.props.user.email}</h4>
          <h4>Is Logged In</h4>
        </div>
      )
    } else {
      return (
        <div>
          Profile
          <Goal />
        </div>
      )
    }
  }

}

export default Profile
