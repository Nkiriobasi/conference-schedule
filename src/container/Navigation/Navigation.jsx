import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className='nav'>
      <div className="nav__container container">
        <div className="nav__logo">
        <Link to='/'><h2 className="nav__logo-text">React Canada 2022</h2></Link>
        </div>

        <ul className="nav__links">
          <Link to='/about' className="nav__link"><li className='nav__link-item'>About</li></Link>
          <Link to='/location' className="nav__link"><li className='nav__link-item'>Location</li></Link>
          <Link to='/food' className="nav__link"><li className='nav__link-item'>Food</li></Link>
          <Link to='/schedule' className="nav__link"><li className='nav__link-item'>Schedule</li></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;