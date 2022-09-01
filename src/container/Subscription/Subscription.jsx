import React from 'react';
import './Subscription.scss';
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <section className='subscription'>
        <div className="container">
            <div className="subscription__content">
                <h2 className="sub__heading-text">BE THE FIRST TO KNOW THE LATEST NEWS</h2>
                
                <div className="sub__form">
                    <input type="text" name="" placeholder='Type your email address' id="" className='sub-input' />
                    <button type="submit" className='sub-btn'>
                        <span className="sub-btn-text">Subscribe</span>
                    </button>
                </div>

                <p className="p-text">By subscribing, you agree to 
                    receive news and updates about our events and products in accordance 
                    with our <Link to='/privacy-policy' className='pp-link'>Privacy Policy</Link> 
                </p>
            </div>
        </div>
    </section>
  );
}

export default Subscription;