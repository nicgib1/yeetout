import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import yeetoutService from "../services/yeetout.service";
import "../App.css";

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
      <label>
        Activity Name:
        <input
          type="text"
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
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      {/* <label>
          Tags:
          <select multiple={true} value={tagsList} onChange={e => setTags(e.target.value)}>
            <option value="outdoors">Outdoors</option>
            <option value="indoors">Indoors</option>
            <option value="sports">Sports</option>
            <option value="Concerts">Concert</option>
          </select>
        </label> */}
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </label>
      <label>
        MinAge:
        <input
          type="text"
          value={minAge}
          onChange={e => setMinAge(e.target.value)}
        />
      </label>
      <label>
        MaxAge:
        <input
          type="text"
          value={maxAge}
          onChange={e => setMaxAge(e.target.value)}
        />
      </label>
      <label>
        Cost:
        <input
          type="text"
          value={cost}
          onChange={e => setCost(e.target.value)}
        />
      </label>
      <label>
        Attendies:
        <input
          type="text"
          value={attendies}
          onChange={e => setAttendies(e.target.value)}
        />
      </label>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default withRouter(CreateActivity);
