import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import yeetoutService from "../services/yeetout.service";
import "../Login.css";

function CreateActivity() {
  // const tagsList = ['outdoors', 'indoors', 'sports', 'concert'];
  const [activityName, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  // const [tags, setTags] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [cost, setCost] = useState("");
  const [attendies, setAttendies] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    yeetoutService.createactivity(
      activityName,
      description,
      location,
      date,
      time,
      minAge,
      maxAge,
      cost,
      attendies,
      localStorage.getItem("authToken")
    );
    // set
    setActivity("");
    setDescription("");
    setLocation("");
    setDate("");
    setTime("");
    setMinAge("");
    setMaxAge("");
    setCost("");
    setAttendies("");
    setRedirect(true);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={{ pathname: "/" }} />;
    }
  };

  return (
    <div className="App-header">
      {renderRedirect()}
      <h2>Create an Activity</h2>
      <label className="description">
        Activity Name:
        <textarea
          className="desc-field"
          value={activityName}
          onChange={e => setActivity(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <label className="location">
        Location:
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      <label className="date">
        Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>
      <label className="time">
        Time:
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </label>
      <label className="min-age">
        MinAge:
        <input
          type="text"
          value={minAge}
          onChange={e => setMinAge(e.target.value)}
        />
      </label>
      <label className="max-age">
        MaxAge:
        <input
          type="text"
          value={maxAge}
          onChange={e => setMaxAge(e.target.value)}
        />
      </label>
      <label className="cost">
        Cost:
        <input
          type="text"
          value={cost}
          onChange={e => setCost(e.target.value)}
        />
      </label>
      <label className="attendies">
        Attendies:
        <input
          type="text"
          value={attendies}
          onChange={e => setAttendies(e.target.value)}
        />
      </label>
      <input
        className="Login-btn"
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default withRouter(CreateActivity);
