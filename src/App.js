// eslint-disable-next-line
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
import GitHubState from './context/github/GitHubState';
const App = () => {
  // Define State
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('');
  // const [userDetails, setUserDetails] = useState({});
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  //   console.log(res.data);
  // }

  // Search Users
  // const searchUsers = async text => {
  //   console.log(text);
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // Get Single User
  // const getUser = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUserDetails(res.data);
  //   setLoading(false);
  // };
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };
  const setAlert = (searchMsg, searchType) => {
    setMsg(searchMsg);
    setType(searchType);
    setTimeout(() => setMsg(''), setType(''), 3000);
  };
  return (
    <GitHubState>
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert msg={msg} type={type} />
            <Switch>
              {/* First Route */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      // clearUsers={clearUsers}
                      // showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    <Users />
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
                    // getUser={getUser}
                    // userDetails={userDetails}
                    // loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
};
export default App;
