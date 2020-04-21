import React from 'react';
import PropTypes from 'prop-types';

// Individual Repository Cards That Appear On The Single User Page
const RepoItem = ({ repo }) => {
  return (
    <div className='card has-text-centered repo-content'>
      {/* Repo Name/Link */}
      <p className='is-size-4 is-size-5-mobile is-link has-text-weight-semibold '>
        <a href={repo.html_url} rel='noopener noreferrer' target='_blank'>
          {repo.name}
        </a>
      </p>
      {/* Description */}
      <p className='is-size-5 is-size-6-mobile repo-text'>{repo.description}</p>
      {/* Tags */}
      <div className='is-grouped is-grouped-multiline has-text-centered level-item'>
        {/* Star Count Tag */}
        <div className='control repo-content'>
          <div className='tags has-addons'>
            <div className='tag is-dark is-size-6 is-size-7-mobile'>
              <i className='fas fa-star'></i>
            </div>
            <div className='tag is-light is-rounded is-size-6 is-size-7-mobile'>
              {repo.stargazers_count}
            </div>
          </div>
        </div>
        {/* Watch Count Tag */}
        <div className='control repo-content'>
          <div className='tags has-addons'>
            <div className='tag is-dark is-size-6 is-size-7-mobile'>
              <i className='fas fa-eye'></i>
            </div>
            <div className='tag is-light is-rounded is-size-6 is-size-7-mobile'>
              {repo.watchers_count}
            </div>
          </div>
        </div>
        {/* Fork Count Tag */}
        <div className='control repo-content'>
          <div className='tags has-addons'>
            <div className='tag is-dark is-size-6 is-size-7-mobile'>
              <i className='fas fa-code-branch'></i>
            </div>
            <div className='tag is-light is-rounded is-size-6 is-size-7-mobile'>
              {repo.forks_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
