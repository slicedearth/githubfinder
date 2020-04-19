import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

// A Grid Which Contains The RepoItem Cards
const Repos = ({ repos }) => {
  return (
    <div className='repo-style'>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
