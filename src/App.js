// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  fullName = () => 'Mary Smith';

  render() {
    const name = 'John';
    const city = () => 'Melbourne';
    const loading = true;
    const showName = true;
    return (
      <div className='App'>
        <h1>
          Greetings From {name.toUpperCase()} Version {134.1 + 0.8}
        </h1>
        <h1>
          {name.toLowerCase()} is from {city()}
        </h1>
        <h1>{this.fullName()}</h1>
        <label htmlFor=''></label>
        {loading ? <h4>Loading is true</h4> : <h4>Loading is false</h4>}
        {/* {showName ? <h4>My name is {name}</h4> : null} */}
        <h4>Hello from {showName && name}</h4>
      </div>
    );
  }
}
export default App;
