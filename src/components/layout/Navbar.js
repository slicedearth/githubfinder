import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        {/* eslint-disable-next-line */}
        <a href='#'>
          <h1>
            <i className={this.props.icon}></i>&nbsp;{this.props.title}
          </h1>
        </a>
        <ul>
          <li></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
