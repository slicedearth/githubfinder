import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import githubContext from '../../context/github/GitHubContext';

// Single User Profile That Lists Information About The User
const SingleUser = ({ match }) => {
  const githubContexts = useContext(githubContext);
  const { userDetails, getUser, repos, getRepos } = githubContexts;
  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    console.log(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    avatar_url,
    login,
    hireable,
    name,
    location,
    bio,
    blog,
    html_url,
    email,
    company,
    created_at,
    public_repos,
    public_gists,
    following,
    followers,
  } = userDetails;
  return (
    <Fragment>
      {/* First Row */}
      <div>
        {/* Back Button */}
        <Link
          to='/'
          className='button is-medium is-fullwidth is-size-5 is-size-6-mobile is-link is-rounded back-margin'
        >
          <i className='fas fa-arrow-circle-left'></i>
          &nbsp;Back To Search
        </Link>
      </div>

      {/* Second Row */}
      {/* Single User Card */}
      <div className='card'>
        <p className='is-size-4 is-size-5-mobile'>
          <strong>&nbsp;Hireable:&nbsp;</strong>
          {hireable ? (
            <i className='fas fa-check-circle has-text-success'></i>
          ) : (
            <i className='fas fa-times-circle has-text-danger'></i>
          )}
        </p>
        <div className='columns'>
          {/* First Column */}
          <div className=' column section section-padding level content-margin'>
            <div className='level-item'>
              {/* Profile Image */}
              <figure className='image is-128x128'>
                <img src={avatar_url} alt='Profile' className='is-rounded' />
              </figure>
            </div>
            {/* Profile Name */}
            <p className='is-size-2 level-item'>{login}</p>
            <ul>
              {/* Name */}
              <li className='is-size-4 is-size-5-mobile level-item'>
                <strong>{name}</strong>
              </li>
              {/* Location */}
              {location && (
                <li className=' is-size-4 is-size-5-mobile level-item'>
                  <strong>
                    <i className='fas fa-map-marker-alt'></i> {location}
                  </strong>
                </li>
              )}
            </ul>
          </div>
          {/* Second Column */}
          <div className='column section section-padding level content-margin'>
            <ul>
              {/* Bio */}
              {bio ? (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Bio:&nbsp;</strong>
                  {bio}
                </li>
              ) : (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Bio:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'></i> Not
                  Provided
                </li>
              )}
              {/* Company */}
              {company ? (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Company:&nbsp;</strong> {company}
                </li>
              ) : (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Company:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
              {/* Year Created */}
              {created_at ? (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Account Created:</strong> {created_at.substring(0, 4)}
                </li>
              ) : (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Account Created:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
              {/* Website */}
              {blog ? (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Site:</strong> {blog}
                </li>
              ) : (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Site:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
              {/* Email */}
              {email ? (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Email:</strong> {email}
                </li>
              ) : (
                <li className='is-size-5 is-size-6-mobile'>
                  <strong>Email:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
            </ul>
            {/* Tags */}
            <div className=' field is-grouped is-grouped-multiline level-item tags-margin'>
              {/* Followers */}
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark is-size-6 is-size-7-mobile'>
                    Followers
                  </div>
                  <div className='tag is-primary is-rounded is-size-6 is-size-7-mobile'>
                    {followers}
                  </div>
                </div>
              </div>
              {/* Following */}
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark is-size-6 is-size-7-mobile'>
                    Following
                  </div>
                  <div className='tag is-warning is-rounded is-size-6 is-size-7-mobile'>
                    {following}
                  </div>
                </div>
              </div>
              {/* Public Repositories */}
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark is-size-6 is-size-7-mobile'>
                    Public Repos
                  </div>
                  <div className='tag is-success is-rounded is-size-6 is-size-7-mobile'>
                    {public_repos}
                  </div>
                </div>
              </div>
              {/* Public Gists */}
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark is-size-6 is-size-7-mobile'>
                    Public Gists
                  </div>
                  <div className='tag is-info is-rounded is-size-6 is-size-7-mobile'>
                    {public_gists}
                  </div>
                </div>
              </div>
            </div>
            {/* GitHub Button */}
            {html_url ? (
              <a
                href={html_url}
                className='button is-medium is-dark is-rounded is-size-5 is-size-6-mobile content-margin level-item'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-github'></i>
                &nbsp;Go To GitHub Page
              </a>
            ) : null}
          </div>
        </div>
        {/* Repository Grid */}
        <div className=''>
          <Repos repos={repos} />
        </div>
      </div>
    </Fragment>
  );
};
export default SingleUser;
