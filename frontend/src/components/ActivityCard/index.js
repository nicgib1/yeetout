import React from 'react';
import yeetoutService from "../../services/yeetout.service";
import './activityCard.css';

function ActivityCard({ name, id, owner, description, location, date, time, minAge, maxAge, cost, attendies }) {
  const handleJoin = (id) => {
    yeetoutService.joinactivity(id, localStorage.getItem("authToken"));
    alert("You joined " + name + " activity");
  };

  return (
    <div className='activityCard'>
      <div>Activity: {name}</div>
      <div>Organizer: {owner}</div>
      <div>Description: {description}</div>
      <div>Location: {location}</div>
      <div>Date: {date}</div>
      <div>Time: {time}</div>
      <div>Age Range: {`${minAge} - ${maxAge}`} </div>
      <div>Cost: {`$${cost}`} </div>
      <div>Attendance Cap: {attendies}</div>
      <input type="button" value="Join" onClick = {() => handleJoin(id)}/>
    </div>
  );
}

export default ActivityCard;