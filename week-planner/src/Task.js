import React from 'react';
import DayExpanded from './DayExpanded'; 

const Task = (props) => {
  return (
    <div className="task">
      <h4>{props.title}</h4>
      <p>Description: {props.description}</p>
      <p>Start Time: {props.startTime}</p>
      <p>End Time: {props.endTime}</p>
      <button className="button">Change</button>
      <DayExpanded /> 
    </div>
  );
}

export default Task;
