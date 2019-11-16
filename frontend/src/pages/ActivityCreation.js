import React, { Component } from 'react';  
import { withRouter } from "react-router-dom";
import "../App.css";

function CreateActivity() {
    const tagsList = ['outdoors', 'indoors', 'sports', 'concert'];
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    const [partySize, setPartySize] = useState("");
    const [tags, setTags] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] =  useState("");
    const [cost, setCost] =  useState("");

    const handleSubmit = () => {
        alert('this function has not yet been implemented');        
        // set
    }

    return (
        <div className="App-header">
        <h2>Create an Activity</h2>
        <label>
          Activity:
          <input
            type="activity"
            value={activity}
            onChange={e => setActivity(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label>
          Party Size:
          <input
            type="text"
            value={partySize}
            onChange={e => setPartySize(e.target.value)}
          />
        </label>
        <label>
          Tags:
          <select multiple={true} value={tagsList} onChange={e => setTags(e.target.value)}>
            <option value="outdoors">Outdoors</option>
            <option value="indoors">Indoors</option>
            <option value="sports">Sports</option>
            <option value="Concerts">Concert</option>
          </select>
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
          Age:
          <input
            type="text"
            value={age}
            onChange={e => setAge(e.target.value)}
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
        <label>
          Cost:
          <input
            type="text"
            value={cost}
            onChange={e => setCost(e.target.value)}
          />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
      );
    }
   

  export default withRouter(ActivityCreation);