import React, { Fragment } from 'react';
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
import AlertState from './context/alert/AlertState';
const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className='section is-narrow'>
              <Alert />
              <Switch>
                {/* Home Route */}
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Fragment>
                      <Search />
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
      </AlertState>
    </GitHubState>
  );
};
export default App;
