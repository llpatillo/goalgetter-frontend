import React, { Component } from "react";
import "./Profile.css";
import "../App/App.css";
import Goal from "../Goal/Goals.js";
import Journal from "../Journal/Journals.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Profile extends Component {
  state = {
    toggle: false,
    toggleGoal: false
  };
  
  render() {
    console.log(this.props);
    console.log(this.state);
    let userGoalsFromLocalStorage = JSON.parse(window.localStorage.userGoals);
    let userJournalsFromLocalStorage = JSON.parse(
      window.localStorage.userJournals
    );

    const userGoalEls = userGoalsFromLocalStorage.map(goal => {
      return <li key={goal.id}>{goal.goal}</li>;
    });

    //     console.log(this.props.userJournals)
    // let userJournalEls = ''
    const userJournalEls = userJournalsFromLocalStorage.map(journal => {
      return <li key={journal.id}>{journal.title}</li>;
    });
    console.log(userJournalEls);

    console.log(this.props);
    if (this.props.user != null) {
      return (
        <div className="goals-journal">
          <div className="welcome">
            <h4>Welcome {this.props.user.name}</h4>
          </div>
          <Tabs>
            <TabList>
              <Tab>Goals</Tab>
              <Tab>Journal</Tab>
            </TabList>
        
            <TabPanel>
            <h1>My Goals</h1>
            <div className={this.state.toggle ? "" : "hide"}>
              <Goal />
            </div>

            <div className={this.state.toggle ? "hide" : ""}>
              <ul>{userGoalEls}</ul>
            </div>

            <button onClick={e => {this.setState({ toggle: !this.state.toggle });}}>Toggle Goal</button>
            
            </TabPanel>
              
            <TabPanel>
            <h1>My Journals</h1>
            <div className={this.state.toggle ? "" : "hide"}>
              <Journal />
              </div>

              <div className={this.state.toggle ? "hide" : ""}>
              <ul>{userJournalEls}</ul>
              </div>

              <button onClick={e => {this.setState({ toggle: !this.state.toggle });}}>Toggle Journal</button>
            </TabPanel>

          </Tabs>
         </div>
      );
    } else {
      return <div>Profile</div>;
    }
  }
}

export default Profile;
