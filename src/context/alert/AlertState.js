import React, { useReducer } from 'react';
import alertContext from './AlertContext';
import alertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

// Alert State Functions
const AlertState = (props) => {
  // Sets The Initial State
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);
  // Set Alert
  const setAlert = (searchMsg, searchType) => {
    dispatch({
      type: SET_ALERT,
      payload: { searchMsg, searchType },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };
  return (
    <alertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};
export default AlertState;
