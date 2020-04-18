import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './GitHubContext';
import githubReducer from './GitHubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';

// Create Initial State
const GitHubState = (props) => {
  // Sets The Initial State
  const initialState = {
    users: [],
    loading: false,
    msg: '',
    type: '',
    userDetails: {},
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };

  // Search Users Function
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      config
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  //   setLoading Function
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get Single User Function
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}`,
      config
    );
    dispatch({ type: GET_USER, payload: res.data });
  };
  // Clear Users Function
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  return (
    <githubContext.Provider
      value={{
        users: state.users,
        userDetails: state.userDetails,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GitHubState;
