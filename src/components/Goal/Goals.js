import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App/App.css";

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_APP_URL : 'http://localhost:3000'

class Goals extends React.Component {
  state = {
    goals: []
  };

  componentDidMount() {
    if (localStorage.token) {
      // this.getGoals();
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    var frm = document.getElementById('goals-form');
    frm.reset();
    let newGoal = {
      category: this.state.category,
      completion_date: this.state.completion_date,
      goal: this.state.goal,
      status: this.state.status
    };

    axios({
      url: `${databaseUrl}/goals`,
      method: "POST",
      data: newGoal,
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(newGoal => {
      console.log(newGoal);
    });
  };

  getGoals = () => {
    axios({
      url: `${databaseUrl}/goals`,
      method: "get"
    }).then(response => {
      this.setState({ goals: response.data.goals });
    });
  };

 
  render() {
    console.log(this.state);
    {
      return (
        <div className="goal-div">
          <form id='goals-form' className="goal-form" onSubmit={e => this.handleSubmit(e)}>
            Category
            <br />
            <input
              type="text"
              name="category"
              onChange={e => this.handleInput(e)}
              required
            />
            <br />
            Completion date
            <br />
           
            <div className="form-group">
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="form-control"
                value={this.state.date}
                onChange={e => this.handleInput(e)}
              />
            </div>
            Goal
            <br />
            <input
              type="text"
              name="goal"
              onChange={e => this.handleInput(e)}
              required
            />
            <br />
            Status
            <br />
            <input
              type="text"
              name="status"
              onChange={e => this.handleInput(e)}
            />
            <br />
            <input type="submit" value="Add" />
          </form>
        </div>
      );
    }
  }
}

export default Goals;
