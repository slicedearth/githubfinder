import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //   constructor() {
  //     super();
  //     this.state = {
  //       login: 'mojombo',
  //       id: 1,
  //       node_id: 'MDQ6VXNlcjE=',
  //       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //       html_url: 'https://github.com/mojombo'
  //     };
  //   }
  //   state = {
  //     login: 'mojombo',
  //     id: 1,
  //     node_id: 'MDQ6VXNlcjE=',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo'
  //   };
  return (
    <div className='card has-text-centered'>
      <figure className='container image is-96x96'>
        <img src={avatar_url} alt='' className='is-rounded' />
      </figure>

      <p className='is-size-5'>{login}</p>
      <div>
        <Link to={`/users/${login}`}>
          <button
            className='button is-dark is-small is-rounded'
            style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}
          >
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
