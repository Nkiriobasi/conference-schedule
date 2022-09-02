import React from 'react';
import './Schedule.scss';
import { Link } from 'react-router-dom';

const Schedule = () => {
  return (
    <section className='section'>
        <div className="container">
            <div className="schedule__content">
                <h2 className="schedule__heading">Schedule</h2>

                <div className="schedule__info">
                    <div className="schedule__info-item">
                        <div className="schedule__info-date">
                            <h2 className="arithmetic-char">1</h2>
                            <h4 className='alphabetic-char'>Sept</h4>
                        </div>
                        
                        <div>
                            <p className="p-text">In-Person Workshop at Conference Venue in Goa</p>
                            <p className="p-text">Remote talks</p>
                            <p className="p-text">Remote workshops</p>
                        </div>
                    </div>

                    <div className="schedule__info-item">
                        <div className="schedule__info-date">
                            <h2 className="arithmetic-char">2</h2>
                            <h4 className='alphabetic-char'>Sept</h4>
                        </div>
                        
                        <div>
                            <p className="p-text">In-Person talks at the Conference Venue in Goa.</p>
                        </div>
                    </div>

                    <div className="schedule__info-item">
                        <div className="schedule__info-date">
                            <h2 className="arithmetic-char">3</h2>
                            <h4 className='alphabetic-char'>Sept</h4>
                        </div>
                        
                        <div>
                            <p className="p-text">In-Person talks at the Conference Venue in Goa</p>
                            <p className="p-text">Remote talks</p>
                            <p className="p-text">Remote workshops</p>
                        </div>
                    </div>

                    <div className="schedule__info-item">
                        <div className="schedule__info-date">
                            <h2 className="arithmetic-char">4</h2>
                            <h4 className='alphabetic-char'>Sept</h4>
                        </div>
                        
                        <div>
                            <p className="p-text">In-Person talks at the Conference Venue in Goa.</p>
                        </div>
                    </div>
                </div>

                <div className="schedule__btn">
                    <Link to='/schedule'className="btn-link">
                        <span className="btn-link-text">View Schedule</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Schedule;