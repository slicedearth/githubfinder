// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Custom CSS File
import './custom.css';
// Bulma CSS
import 'bulma/css/bulma.css';
// Custom Javascript File
import './custom.js';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
class App extends Component {
  // Sets The Initial State
  state = {
    users: [],
    loading: false,
    msg: '',
    type: '',
    userDetails: {},
  };
  // Search Users Function -- Searches For Users Based On The Search Term Entered Using The GitHub API
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Get Single User Function -- Gets Data About A Single User From The GitHub API
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    });
    this.setState({ userDetails: res.data, loading: false });
  };
  // Clear Users Function -- Clears The Search
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  // Set Alert Function -- Loads An Alert if Certain Conditions Are Met
  setAlert = (searchMsg, searchType) => {
    this.setState({ msg: searchMsg, type: searchType });
    setTimeout(() => this.setState({ msg: '', type: '' }), 3000);
  };
  render() {
    const { loading, users } = this.state;
    return (
      // React Router
      <Router>
        <div>
          <Navbar />
          <div className='section is-narrow'>
            <Alert msg={this.state.msg} type={this.state.type} />
            {/* Switches Between Routes Based On The Path */}
            <Switch>
              {/* First Route */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              {/* Second Route */}
              <Route exact path='/about' component={About} />
              {/* Third Route */}
              <Route
                exact
                path='/users/:login'
                render={(props) => (
                  <SingleUser
                    {...props}
                    getUser={this.getUser}
                    userDetails={this.state.userDetails}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
