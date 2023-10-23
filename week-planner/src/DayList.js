import React from 'react';

const DayList = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="day-list">
      <ul>
        {days.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
}

export default DayList;
