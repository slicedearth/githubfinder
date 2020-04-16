import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    // <nav className='navbar bg-primary'>
    //   {/* eslint-disable-next-line */}
    //   <Link to='/'>
    //     <h1>
    //       <i className={icon}></i>&nbsp;{title}
    //     </h1>
    //   </Link>
    //   <ul>
    //     <li>
    //       <Link to='/'>Home</Link>
    //     </li>
    //     <li>
    //       <Link to='/about'>About</Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav
      class='navbar is-dark is-spaced'
      role='navigation'
      aria-label='main navigation'
    >
      <div class='navbar-brand'>
        <Link class='navbar-item' to='/'>
          <h1 className='is-size-3'>
            <i className={icon}></i>&nbsp;{title}
          </h1>
        </Link>

        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        {<a
          role='button'
          class='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >}
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' class='navbar-menu navbar-end'>
        <Link
          to='/'
          class='navbar-item has-text-centered-touch is-size-4-touch is-size-5-desktop'
        >
          Home
        </Link>

        <Link
          to='About'
          class='navbar-item has-text-centered-touch is-size-4-touch is-size-5-desktop'
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
