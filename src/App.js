// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar title='GitHub Finder' icon='fab fa-github' /> */}
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}
export default App;
