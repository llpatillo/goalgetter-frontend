import React, { Component } from "react";
import "./Profile.css";
import "../App/App.css";
import Goal from "../Goal/Goals.js";
import Journal from "../Journal/Journals.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";

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
        // <div className="goals-journal">
        //   <div>
        //     <aside>
        //       <h4>Hi {this.props.user.name}!</h4>
        //       <br />
        //       <br />
        //       <h5> Stats</h5>
        //       <h6>Completed Goals: 6 </h6>
        //       <h6>In progress: 9</h6>
        //     </aside>
        //   </div>

          // <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          //   <Tab eventKey="home" title="Home">
          //     <Goal />
          //   </Tab>
          //   <Tab eventKey="profile" title="Profile">
          //     <Journal />
          //   </Tab>
          // </Tabs>

   

          <div>
            <Row noGutters={true}>
              <Col xs={12} md={2}>
              <h4>Hi {this.props.user.name}!</h4>
              <br />
              <br />
              <h5> Stats</h5>
              <h6>Completed Goals: 6 </h6>
              <h6>In progress: 9</h6>
              </Col>

              <Col xs={12} md={10} >
              <Tabs defaultActiveKey="goal" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Goals">
              <Goal />
              <div>
                <div>
                <div className={this.state.toggle ? "" : "hide"}></div>
                <div className={this.state.toggle ? "hide" : ""}></div>
               </div>
            <div>
              <ul>{userGoalEls}</ul>
            </div>
            <div>
              <button onClick={e => {this.setState({ toggle: !this.state.toggle });}}>Toggle Goal</button>
          </div>
          </div>
            </Tab>
            <Tab eventKey="profile" title="Journals">
              <Journal />
            </Tab>
          </Tabs>
              </Col>
            </Row>
          </div>

        //   {/* <Tabs>
        //     <TabList>
        //       <Tab>Goals</Tab>
        //       <Tab>Journal</Tab>
        //     </TabList>
        
        //     <TabPanel>
        //     <h4>My Goals</h4>
        //     <div className={this.state.toggle ? "" : "hide"}>
        //       <Goal />
        //     </div>

        //     <div className={this.state.toggle ? "hide" : ""}>
        //       <ul>{userGoalEls}</ul>
        //     </div>

        //     <button onClick={e => {this.setState({ toggle: !this.state.toggle });}}>Toggle Goal</button>
        //    </TabPanel>
              
        //     <TabPanel>
        //     <h4>My Journals</h4>
        //     <div className={this.state.toggle ? "" : "hide"}>
        //       <Journal />
        //       </div>

        //       <div className={this.state.toggle ? "hide" : ""}>
        //       <ul>{userJournalEls}</ul><FontAwesomeIcon icon={faPlus} />

        //       </div>

        //       <button onClick={e => {this.setState({ toggle: !this.state.toggle });}}>Toggle Journal</button>
        //     </TabPanel>

        //   </Tabs> */}
        // // </div>
      );
    } else {
      return <div>Profile</div>;
    }
  }
}

export default Profile;
