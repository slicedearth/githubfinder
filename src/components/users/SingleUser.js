import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
class SingleUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
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
      followers
    } = this.props.userDetails;
    return (
      <Fragment>
        {/* First Row */}
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
        {/* Second Row */}
        <div className='card grid-2'>
          {/* First Column */}
          <div className='all-center'>
            <img
              src={avatar_url}
              alt='Profile'
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{login}</h1>
            <ul>
              <li>
                <strong>{name}</strong>
              </li>
              {location && (
                <li>
                  <strong>
                    <i className='fas fa-map-marker-alt'></i> {location}
                  </strong>
                </li>
              )}
            </ul>
          </div>
          {/* Second Column */}
          <div style={{ marginLeft: '6rem' }}>
            <ul className='py-2'>
              {/* BIO */}
              {bio ? (
                <li>
                  <strong>Bio:</strong> {bio}
                </li>
              ) : (
                <li>
                  <strong>Bio:</strong>{' '}
                  <i className='fas fa-times-circle text-danger'></i> Not
                  Provided
                </li>
              )}
              {/* COMPANY */}
              {company ? (
                <li>
                  <strong>Company:</strong> {company}
                </li>
              ) : (
                <li>
                  <strong>Company:</strong>{' '}
                  <i className='fas fa-times-circle text-danger'> </i> Not
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
                  <i className='fas fa-times-circle text-danger'> </i> Not
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
                  <i className='fas fa-times-circle text-danger'> </i> Not
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
                  <i className='fas fa-times-circle text-danger'> </i> Not
                  Provided
                </li>
              )}
            </ul>

            {/* GITHUB BUTTON */}
            {html_url ? (
              <a
                href={html_url}
                className='btn btn-dark'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github Page
              </a>
            ) : null}
          </div>
          <div className=''>
            <div className='badge badge-primary'>Followers: {followers}</div>
            <div className='badge badge-success'>Following: {following}</div>
            <div className='badge badge-light'>
              Public Repos: {public_repos}
            </div>
            <div className='badge badge-dark'>Public Gists: {public_gists}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SingleUser;
