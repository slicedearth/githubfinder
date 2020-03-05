import React, { Component } from 'react';

class SingleUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const { avatar_url, login, html_url } = this.props.userDetails;
    return (
      <div>
        <img
          src={avatar_url}
          alt='Profile Picture'
          className='round-img'
          style={{ width: '250px' }}
        />
        <h2>{login}</h2>
      </div>
    );
  }
}

export default SingleUser;
