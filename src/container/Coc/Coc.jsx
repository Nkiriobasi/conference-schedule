import React from 'react';
import './Coc.scss';
import { Link } from 'react-router-dom';

const Coc = () => {
  return (
    <section className='section coc'>
        <div className="container">
            <h2 className="coc-heading-text">READ OUR</h2>
            <h1 className="coc-bold-text">CODE OF CONDUCT</h1>
            <p className="p-text">React Native EU is committed 
                to providing a friendly, safe and welcoming 
                environment for all, regardless of gender, sexual 
                orientation, disability, ethnicity, or religion. 
                Our Code of Conduct outlines our expectations for 
                participants' behavior. We do not tolerate harassment 
                of conference participants in any form.
            </p>
            
            <div className="coc-btn">
                <Link to='/#code-of-conduct'className="btn-link">
                    <span className="btn-link-text">Read More</span>
                </Link>
            </div>
        </div>
    </section>
  );
}

export default Coc;