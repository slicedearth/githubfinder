// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
class App extends Component {
  state = {
    users: [],
    loading: false,
    msg: '',
    type: '',
    userDetails: {}
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  //   console.log(res.data);
  // }

  // Search Users
  searchUsers = async text => {
    console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Get Single User
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ userDetails: res.data, loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (searchMsg, searchType) => {
    this.setState({ msg: searchMsg, type: searchType });
    setTimeout(() => this.setState({ msg: '', type: '' }), 3000);
  };
  render() {
    const { loading, users } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert msg={this.state.msg} type={this.state.type} />
            <Switch>
              {/* First Route */}
              <Route
                exact
                path='/'
                render={props => (
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
                render={props => (
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
