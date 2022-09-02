import React from 'react';
import { Navigation } from '../../container';
import './Schedule.scss';

const Schedule = () => {
  return (
    <div>
        <Navigation />

        <main>
          <header className="schedule__hd">
            <div className="container">
              <h2 className="schedule__hd-date">1st - 4th Sept 2022</h2>
              <h4 className="schedule__hd-title">Our Schedule</h4>
            </div>
          </header>
        </main>
    </div>
  );
}

export default Schedule;