import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './GitHubContext';
import githubReducer from './GitHubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

// GitHub State Functions
const GitHubState = (props) => {
  // Sets The Initial State
  const initialState = {
    users: [],
    loading: false,
    msg: '',
    type: '',
    userDetails: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Authorisation Token For GitHub Requests -- Loaded From .env.local File
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };

  //   setLoading Function
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Search Users Function
  const searchUsers = async (text) => {
    setLoading();
    // Axios Request To Fetch Data
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      config
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Get Single User Function
  const getUser = async (username) => {
    setLoading();
    // Axios Request To Fetch Data
    const res = await axios.get(
      `https://api.github.com/users/${username}`,
      config
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get Repos Function
  const getRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:as`,
      config
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Clear Users Function
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        userDetails: state.userDetails,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GitHubState;
