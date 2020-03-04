import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      {/* eslint-disable-next-line */}
      <a href='/'>
        <h1>
          <i className={icon}></i>&nbsp;{title}
        </h1>
      </a>
      <ul>
        <li></li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
