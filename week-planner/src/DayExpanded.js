import React from 'react';
import NewTaskForm from './NewTaskForm'; 

const DayExpanded = () => {
  return (
    <div className="day-expanded">
      <ul className="task-list">
      </ul>
      <NewTaskForm />
    </div>
  );
}

export default DayExpanded;
