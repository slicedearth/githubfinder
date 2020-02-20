// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  fullName = () => 'Mary Smith';
  render() {
    const name = 'John';
    const city = () => 'Melbourne';
    return (
      // Vanilla JS
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, 'Greetings')
      // )

      // JSX
      <div className='App'>
        <h1>
          Greetings From {name.toUpperCase()} Version {134.1 + 0.8}
        </h1>
        <h1>
          {name.toLowerCase()} is from {city()}
        </h1>
        <h1>{this.fullName()}</h1>
        <label htmlFor=''></label>
      </div>
      // <>
      // <h1>Greetings</h1>
      // </>
    );
  }
}
export default App;
