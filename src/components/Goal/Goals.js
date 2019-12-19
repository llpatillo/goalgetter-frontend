import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App/App.css'


const databaseUrl = "http://localhost:3000";

class Goals extends React.Component {
    state = {
        goals: []
    };

    componentDidMount() {
        if(localStorage.token) {
            // this.getGoals();

        }
        
    }

    handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
          e.preventDefault()
          let newGoal = {
            category: this.state.category,
            completion_date: this.state.completion_date,
            goal: this.state.goal,
            status: this.state.status
          }

          axios({
            url: `${databaseUrl}/goals`,
            method: 'POST',
            data: newGoal,
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
          })
          .then(newGoal => {
              console.log(newGoal)
          })
      }

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
                <div className="goal-div" >
                    <form className="goal-form" onSubmit={e => this.handleSubmit(e)}>
                    Category<br />
                    <input type="text" name="category" onChange={e => this.handleInput(e)}/><br/>
                    Completion date<br />
                    {/* <input type="text" name="completion_date" onChange={e => this.handleInput(e)}/><br/> */}
                    <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Date'
                    name='date'
                    className='form-control'
                    value={this.state.date}
                    onChange={e => this.handleInput(e)}
                  />
                </div>
                    Goal<br/>
                    <input type="text" name="goal" onChange={e => this.handleInput(e)}/><br/>
                    Status<br/>
                    <input type="text" name="status" onChange={e => this.handleInput(e)}/><br/>
                    <input type="submit" value="Create a new Goal" />
                    </form>
                    
                </div>
            );
        };

    }   
};

export default Goals;