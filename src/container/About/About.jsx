import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className='about section'>
        <div className="container">
            <div className="about__content">
                <h2 className="about__h2">
                    <span className="about__h2-text">About</span>
                </h2>
                <h1 className="about__h1">
                    <span className="about__h1-text">Conference</span>
                </h1>
                
                <p className="p-text">React Summit is a celebration of good things coming together:</p>
                <p className="p-text">
                    React Summit is an annual conference on all things React, gathering thousands of 
                    Front-end and Full-stack engineers from around the world. <br /><br />
                    Originally exclusively in-person, React Summit now offers a hybrid format with 
                    both remote and in-person participation. <br /><br />
                    The first day to be streamed from the Amsterdam venue including hybrid networking 
                    features and interactive entertainment; and second day, as well as the numerous 
                    free workshops, streamed to the global audience online. <br /><br />
                    Please mind that the live stream & in-person program are identical in content, 
                    however, each starts at a different time. <br /><br />
                    The in-person program starts at 9:00 CEST whereas the live stream starts at 13:00 CEST. <br /><br />
                    Stay tuned!
                </p>
                <p className="p-text">This year, you can expect authors and core teams of:</p>
                
                <div className="teams__wrapper">
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                    <div className="teams">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;