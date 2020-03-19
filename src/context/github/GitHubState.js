import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './GitHubContext';
import githubReducer from './GitHubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';

// Create Initial State
const GitHubState = props => {
  const initialState = {
    users: [],
    loading: false,
    msg: '',
    type: '',
    userDetails: {}
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  //   setLoading Function
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get Single User

  // Clear Users

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        userDetails: state.userDetails,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GitHubState;
