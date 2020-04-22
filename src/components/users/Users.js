import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// Users Component -- Creates A Grid Featuring Multiple User Items
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='user-style'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
export default Users;
