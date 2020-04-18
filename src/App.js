import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './custom.css';
import 'bulma/css/bulma.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
import GitHubState from './context/github/GitHubState';
const App = () => {
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('');
  // SetAlert Function
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
          <div className='section is-narrow'>
            <Alert msg={msg} type={type} />
            <Switch>
              {/* Home Route */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search setAlert={setAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              {/* About Route */}
              <Route exact path='/about' component={About} />
              {/* User Route */}
              <Route
                exact
                path='/users/:login'
                render={(props) => <SingleUser {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
};
export default App;
