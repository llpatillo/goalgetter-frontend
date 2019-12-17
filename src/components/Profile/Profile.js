import React, { Component } from 'react'
import './Profile.css'
import Goal from '../Goal/Goals.js'

class Profile extends Component {
  
  render() {
    const userGoalEls = this.props.userGoals.map(goal => {
      return <li key={goal.id}>{goal.goal}</li>
    })

    console.log(this.props)
    if (this.props.user != null) {
      return (
        <div>
          <h4>{this.props.user.email}</h4>
          <h4>Is Logged In</h4>
          <Goal />
          <ul>
            {userGoalEls}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          Profile
        </div>
      )
    }
  }

}

export default Profile
