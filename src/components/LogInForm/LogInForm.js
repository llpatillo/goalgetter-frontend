import React, { Component } from 'react'

import './LogInForm.css'
import { Form, Button } from "react-bootstrap";

class LogInForm extends Component {
  render () {
    return (

      <Form className="login-form">
      <div>
    <h2>Log In</h2>
    </div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={this.props.handleInput}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={this.props.handleInput} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.props.handleLogIn}>
        Submit
      </Button>
    </Form>


      // <div>
      //   <h2>Log In</h2>

      //   <form className="login-form">
      //     <div>
      //       <label htmlFor='email'>Email</label>
      //       <input type='text' name='email' onChange={this.props.handleInput} />
      //     </div>
      //     <div>
      //       <label htmlFor='password'>Password</label>
      //       <input type='password' name='password' onChange={this.props.handleInput} />
      //     </div>
      //     <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
      //   </form>
      // </div>
    )
  }
}

export default LogInForm


