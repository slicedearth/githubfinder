import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import githubContext from '../../context/github/GitHubContext';

// A Grid Which Contains The UserItem Cards
const Users = () => {
  const githubContexts = useContext(githubContext);
  const { users, loading } = githubContexts;
  // If Data IS Still Loading, Shows Spinner
  if (loading) {
    return <Spinner />;
  } else {
    return (
      // Loads User Data And Formats Data into multiple UserItems
      <div className='user-style'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
export default Users;
