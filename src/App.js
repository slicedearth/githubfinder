// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar title='GitHub Finder' icon='fab fa-github' /> */}
        <Navbar />
      </div>
    );
  }
}
export default App;
