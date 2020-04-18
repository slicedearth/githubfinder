import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import githubContext from '../../context/github/GitHubContext';

const Search = ({ setAlert }) => {
  const githubContexts = useContext(githubContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
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
        <div className='field'>
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
          {/* <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          
        /> */}

          {/* <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        /> */}
          <div className='control'>
            <button
              className='button is-dark is-medium is-rounded is-fullwidth'
              style={{ marginBottom: '0.8rem', marginTop: '0.8rem' }}
            >
              <span className='icon-is-small'>
                <i className='fas fa-search'>&nbsp;</i>
              </span>
              Search
            </button>
          </div>

          {/* </form> */}
          {githubContexts.users.length > 0 && (
            // <button
            //   className='btn btn-light btn-block'
            //   onClick={githubContexts.clearUsers}
            // >
            //   Clear
            // </button>
            <div className='control'>
              <button
                className='button is-danger is-medium is-rounded is-fullwidth'
                onClick={githubContexts.clearUsers}
                style={{ marginBottom: '0.8rem' }}
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
Search.propTypes = {
  // clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
