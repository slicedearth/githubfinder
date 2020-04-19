import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    // Navbar
    <nav
      className='navbar is-dark is-spaced no-highlight'
      style={{ userSelect: 'none' }}
      role='navigation'
      aria-label='main navigation'
    >
      {/* Navbar Brand */}
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <h1 className='is-size-3'>
            <i className={icon}></i>&nbsp;{title}
          </h1>
        </Link>
        {/* Hamburger Menu For Tablet/Mobile */}
        {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='gfNavbar'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        }
      </div>
      {/* Home Link */}
      <div id='gfNavbar' className='navbar-menu navbar-end'>
        <Link
          to='/'
          className='navbar-item has-text-centered-touch is-size-6-mobile is-size-5'
        >
          Home
        </Link>
        {/* About Link */}
        <Link
          to='/About'
          className='navbar-item has-text-centered-touch is-size-6-mobile is-size-5'
        >
          About
        </Link>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
