import React from 'react';
import Day from './Day';

const Week = () => {
  return (
    <div className="week">
      <h1>My Weekly Planner</h1>
      <div className="row">
        <div className="column">
            <Day dayName="Monday" />
        </div>
        <div className="column">
            <Day dayName="Tuesday" />
        </div>
        <div className="column">
            <Day dayName="Wednesday" />
        </div>
        <div className="column">
            <Day dayName="Thursday" />
        </div>
        <div className="column">
            <Day dayName="Friday" />
        </div>
        <div className="column">
            <Day dayName="Saturday" />
        </div>
        <div className="column">
            <Day dayName="Sunday" />
        </div>
      </div>
    </div>
  );
}

export default Week;
