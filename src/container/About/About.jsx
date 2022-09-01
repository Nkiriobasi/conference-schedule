import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className='about'>
        <div className="container">
            <div className="about__content">
                <h2 className="about__h2-text">The Event</h2>
                <p className="about__p-text">React Summit is a celebration of good things coming together:</p>
            </div>
        </div>
    </section>
  );
}

export default About;