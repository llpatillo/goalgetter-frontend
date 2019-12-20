import React, { Component } from 'react'

import './SignUpForm.css'
import { Form, Button } from "react-bootstrap";

class SignUpForm extends Component {
  render () {
    return (
   
      <div>
        <h2>Sign Up</h2>

        <form className="signup-form">
        <div>
            
            <input type='text' name='name' placeholder="Enter name" onChange={this.props.handleInput} />
          </div>
          <div>
            
            <input type='text' name='email' placeholder="Enter email" onChange={this.props.handleInput} />
          </div>

          <div>
            
            <input type='password' name='password' placeholder="Create a password" onChange={this.props.handleInput} />
          </div>
          <div>
           
            <input type='text' name='profile-picture' placeholder="Upload a profile pic" onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
  }
}

export default SignUpForm


