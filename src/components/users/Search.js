import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import githubContext from '../../context/github/GitHubContext';

const Search = ({ setAlert, searchUsers, showClear, clearUsers }) => {
  const githubContexts = useContext(githubContext);
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something.', 'light');
    } else {
      console.log(text);
      githubContexts.searchUsers(text);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
