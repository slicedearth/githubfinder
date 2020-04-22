import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// User Item Component -- Places Content From The GitHub Profile Inside Of A Card
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card has-text-centered'>
      <figure className='container image is-96x96'>
        <img src={avatar_url} alt='' className='is-rounded' />
      </figure>
      <p className='is-size-5'>{login}</p>
      <div>
        <Link to={`/users/${login}`}>
          <button className='button is-dark is-small is-rounded info-margin'>
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
