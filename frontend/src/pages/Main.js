import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../utils/utils";
import yeetoutService from "../services/yeetout.service";
import ActivityCard from "../components/ActivityCard";
import "../App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedin: isLoggedIn(), refresh: false, activities: [] };
  }

  componentDidMount() {
    yeetoutService.getActivities().then(response => {
      this.setState({ activities: response.activities });
      console.log(this.state.activities);
    });
    this.setState({ loggedin: isLoggedIn() });
  }

  render() {
    return (
      <>
        <header>
          <div className="App-header">
            {!this.state.loggedin && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/createaccount">Create Account</Link>
              </>
            )}
            <h1>YEETOUT</h1>
            <Link to="/createactivity">+</Link>
          </div>
        </header>
        <div>
          {this.state.activities.map(item => {
            return (
              <ActivityCard
                key={item.id}
                name={item.name}
                id={item.id}
                owner={item.owner_id}
                description={item.description}
                location={item.location}
                date={item.date}
                time={item.time}
                minAge={item.min_age}
                maxAge={item.max_age}
                cost={item.cost}
                attendies={item.attendies}
              />
            );
          })}
        </div>
      </>
    );
  }
}

//<img src={logo} className="App-logo" alt="logo" />

export default withRouter(Main);
