import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/GitHubContext';

const SingleUser = ({ match }) => {
  const githubContexts = useContext(githubContext);
  const { userDetails, getUser } = githubContexts;
  useEffect(() => {
    getUser(match.params.login);
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
      <div className='section section-padding'>
        {/* First Row */}
        <Link
          to='/'
          className='button is-medium is-fullwidth is-link is-rounded'
        >
          <i className='fas fa-arrow-circle-left fa-lg'></i>
          &nbsp;Back To Search
        </Link>
      </div>

      {/* Second Row */}
      <div className='card'>
        <p className='is-size-5'>
          <strong>&nbsp;Hireable:&nbsp;</strong>
          {hireable ? (
            <i className='fas fa-check-circle has-text-success'></i>
          ) : (
            <i className='fas fa-times-circle has-text-danger'></i>
          )}
        </p>
        <div className='columns'>
          {/* First Column */}
          <div className=' column section section-padding level'>
            <div className='level-item'>
              <figure className='image is-128x128'>
                <img src={avatar_url} alt='Profile' className='is-rounded' />
              </figure>
            </div>
            <p className='is-size-2 level-item'>{login}</p>
            <ul>
              <li className='level-item'>
                <strong>{name}</strong>
              </li>
              {location && (
                <li className='level-item'>
                  <strong>
                    <i className='fas fa-map-marker-alt'></i> {location}
                  </strong>
                </li>
              )}
            </ul>
          </div>
          {/* Second Column */}
          <div className='column section section-padding level'>
            <ul className='py-2'>
              {/* BIO */}
              {bio ? (
                <li>
                  <strong>Bio:&nbsp;</strong>
                  {bio}
                </li>
              ) : (
                <li>
                  <strong>Bio:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'></i> Not
                  Provided
                </li>
              )}
              {/* COMPANY */}
              {company ? (
                <li>
                  <strong>Company:&nbsp;</strong> {company}
                </li>
              ) : (
                <li>
                  <strong>Company:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
              {/* JOINED */}
              {created_at ? (
                <li>
                  <strong>Account Created:</strong> {created_at.substring(0, 4)}
                </li>
              ) : (
                <li>
                  <strong>Account Created:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
              {/* SITE */}
              {blog ? (
                <li>
                  <strong>Site:</strong> {blog}
                </li>
              ) : (
                <li>
                  <strong>Site:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
              {/* EMAIL */}
              {email ? (
                <li>
                  <strong>Email:</strong> {email}
                </li>
              ) : (
                <li>
                  <strong>Email:</strong>{' '}
                  <i className='fas fa-times-circle has-text-danger'> </i> Not
                  Provided
                </li>
              )}
            </ul>
            <div
              className=' field is-grouped is-grouped-multiline level-item'
              style={{ marginTop: '2rem', marginBottom: '0.5rem' }}
            >
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark'>Followers</div>
                  <div className='tag is-primary is-rounded'>{followers}</div>
                </div>
              </div>
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark'>Following</div>
                  <div className='tag is-warning is-rounded'>{following}</div>
                </div>
              </div>
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark'>Public Repos</div>
                  <div className='tag is-success is-rounded'>
                    {public_repos}
                  </div>
                </div>
              </div>
              <div className='control'>
                <div className='tags has-addons'>
                  <div className='tag is-dark'>Public Gists</div>
                  <div className='tag is-info is-rounded'>{public_gists}</div>
                </div>
              </div>
            </div>
            {/* GITHUB BUTTON */}
            {html_url ? (
              <a
                href={html_url}
                className='button is-medium is-dark is-rounded'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-github'></i>
                &nbsp;Go To GitHub Page
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SingleUser;
