import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App/App.css'


const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class Journals extends React.Component {
    state = {
        journals: []
    };

    componentDidMount() {
        this.getJournals();
    }

    handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
          e.preventDefault()
          let newJournal = {
            title: this.state.title,
            thoughts: this.state.thoughts
          }

          axios({
            url: `${databaseUrl}/journals`,
            method: 'POST',
            data: newJournal,
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
          })
          .then(Journal => {
              console.log(newJournal)
          })
      }

    getJournals = () => {
        axios({
            url: `${databaseUrl}/journals`,
            method: "get"
        }).then(response => {
            console.log(response)
            this.setState({ journals: response.data.journals });

        });
    };

    render() {
        console.log(this.state);
         {
            return (
                <div className="journal-div">
                    <form className="journal-form" onSubmit={e => this.handleSubmit(e)}>
                    Title<br />
                    <input type="text" name="title" onChange={e => this.handleInput(e)}/><br/>
                    Thoughts<br />
                    <input type="text" name="thoughts" onChange={e => this.handleInput(e)}/><br/>
                    <input type="submit" value="Create a new Journal Entry" />
                    </form>
                    
                </div>
            );
        };

    }   
};


export default Journals;