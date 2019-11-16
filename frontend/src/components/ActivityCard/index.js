import React from 'react';
import { Button } from 'reactstrap';
import './activityCard.css';

function ActivityCard({ name, owner, description, location, date, time, minAge, maxAge, cost, attendies }) {
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
      <Button>Join</Button>
    </div>
  );
}

export default ActivityCard;