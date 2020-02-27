import React from 'react';
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
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a className='btn btn-dark btn-sm my-1' href={html_url}>
          More
        </a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
