import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero__content">
                <h1 className='hero__bold-text'>REACT CANADA 2022</h1>
                <h2 className="hero__semibold-text">SEPT 1–4, 2022 CANADA</h2>
                <p className='p-text'>The Only React focused & Community driven conference</p>
                <Link to='/'className="hero__btn-link">
                    <span className="hero__btn-link-text">Buy a Ticket</span>
                </Link>
            </div>
        </div>
    </section>
  );
}

export default Hero;