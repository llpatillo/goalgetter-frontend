import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios'

import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import Profile from '../Profile/Profile'
import Goal from '../Goal/Goals.js'
import Journal from '../Journal/Journals.js'
import Home from '../Home/Home.js'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

// const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class App extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    profile_pic_url: '',
    isLoggedIn: false,
    user: null,
    userGoals: [],
    userJournals: []
  }

  componentDidMount() {
    if (localStorage.token) {
      let user = JSON.parse(localStorage.user)
      this.setState({
        isLoggedIn: true,
        user
      })
      axios.get(`${databaseUrl}goals?userId=${user.id}`).then( res => {
        this.setState({
          userGoals: res.data.goals
        })
      }).catch(err => console.log('goalsError', err))
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
    // if (localStorage.token) {
    //   axios(
    //     {
    //       method: 'post',
    //       url: `${databaseUrl}/api/users`,
    //       headers: { Authorization: `Bearer ${localStorage.token}` }
    //     })
    //     .then(response => {
    //       this.setState({
    //         isLoggedIn: true,
    //         user: response.data.user
    //       })
    //       this.props.history.push('/profile')
    //     })
    //     .catch(err => console.log(err))
    // } else {
    //   this.setState({
    //     isLoggedIn: false
    //   })
    // }
  }

  handleLogOut = (e) => {
    e.preventDefault()
    window.localStorage.clear()
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
      user: null
    })
    this.props.history.push('/login')
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      profile_pic_url: this.state.profile_pic_url
    }
    console.log(`${databaseUrl}users/signup`)
    axios(
      {
        method: 'post',
        url: `${databaseUrl}users/signup`,
        data: newUser
      })
      .then(response => {
        console.log(response)
        const location = {
          pathname: '/login'
        }
        this.props.history.replace(location)
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    let loginUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}users/login`,
        data: loginUser
      })
      .then(response => {
        console.log(response)
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('user', JSON.stringify(response.data.user))
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          email: '',
          password: '',
          userGoals: response.data.userGoals,
          userJournals: response.data.userJournals

        })
        this.props.history.push('/profile')
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    console.log(process.env)
    return (
      <div>
        <h1>Goal Getter</h1>

        <NavBar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <div className='body'>
          <Switch >
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={e => this.handleLogOut(e)} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route path='/profile'
              render={(props) => {
                return (
                  <Profile isLoggedIn={this.state.isLoggedIn} user={this.state.user} userGoals={this.state.userGoals} userJournals={this.state.userJournals}/>
                )
              }}
            />
            {/* <Route path='/'
              render={(props) => {
                return (
                  <Home />
                )
              }}
            /> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
