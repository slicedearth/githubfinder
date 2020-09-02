import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/GitHubContext';
import alertContext from '../../context/alert/AlertContext';

const Search = () => {
  const githubContexts = useContext(githubContext);
  const alertContexts = useContext(alertContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContexts.setAlert('Please enter a username', 'light');
    } else {
      console.log(text);
      githubContexts.searchUsers(text);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className='field'>
          {/* Search Bar */}
          <div className='control'>
            <input
              className='input is-rounded'
              type='text'
              name='text'
              placeholder='Search Users...'
              value={text}
              onChange={onChange}
            ></input>
          </div>
          {/* Search Button */}
          <div className='control'>
            <button className='button is-dark is-medium is-size-5 is-size-6-mobile is-rounded is-fullwidth search-margin'>
              <span className='icon-is-small'>
                <i className='fas fa-search'>&nbsp;</i>
              </span>
              Search
            </button>
          </div>
          {/* Clear Button -- Will only appear once a search has been attempted. */}
          {githubContexts.users.length > 0 && (
            <div className='control'>
              <button
                className='button is-danger is-medium is-size-5 is-size-6-mobile is-rounded is-fullwidth clear-margin'
                onClick={githubContexts.clearUsers}
              >
                <span className='icon-is-small'>
                  <i className='fas fa-eraser'>&nbsp;</i>
                </span>
                Clear
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Search;
