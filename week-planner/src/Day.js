import React from 'react';
import Task from './Task'; 

const Day = ({ dayName }) => {
  return (
    <div className="day">
      <h2>{ dayName }</h2> 
      <ul className="task-list">
        <Task
          title="Task 1"
          description="Go to dancing"
          startTime="7:00 AM"
          endTime="11:00 AM"
        />
        <Task
          title="Task 2"
          description="Buy products"
          startTime="17:00 PM"
          endTime="20:00 PM"
        />
        <Task
          title="Task 3"
          description="Watch fav film"
          startTime="20:00 PM"
          endTime="23:00 PM"
        />
      </ul>
    
    </div>
  );
}

export default Day;
