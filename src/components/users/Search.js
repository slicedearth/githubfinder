import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Search Component -- Allows Users To Search For GitHub Profiles
class Search extends Component {
  // Sets The Initial State
  state = {
    text: '',
  };
  // PropTypes Declaration
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  // Sets The State When Data Is Entered
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // Searches For Users If The Search Field Isn't Empty. If The Search Field Is Empty It Will Display An Alert Instead
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something.', 'light');
    } else {
      this.props.searchUsers(this.state.text);
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <div className='field'>
            {/* Search Bar */}
            <div className='control'>
              <input
                className='input is-rounded'
                type='text'
                name='text'
                placeholder='Search Users...'
                value={this.text}
                onChange={this.onChange}
              ></input>
            </div>
            {/* Search Button */}
            <div className='control'>
              <button className='button is-dark is-medium is-rounded is-fullwidth search-margin'>
                <span className='icon-is-small'>
                  <i className='fas fa-search'>&nbsp;</i>
                </span>
                Search
              </button>
            </div>
            {/* Clear Button -- Will only appear once a search has been attempted. */}
            {showClear && (
              <div className='control'>
                <button
                  className='button is-danger is-medium is-rounded is-fullwidth clear-margin'
                  onClick={clearUsers}
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
  }
}

export default Search;
