import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// Single User Component -- Displays Details From The GitHub Profile
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
      followers,
    } = this.props.userDetails;
    return (
      <Fragment>
        {/* First Row */}
        <div>
          <Link
            to='/'
            className='button is-medium is-fullwidth is-link is-rounded back-margin'
          >
            <i className='fas fa-arrow-circle-left fa-lg'></i>
            &nbsp;Back To Search
          </Link>
        </div>
        {/* Second Row */}
        <div className='card'>
          <p className='is-size-4'>
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
                <li className='is-size-4 level-item'>
                  <strong>{name}</strong>
                </li>
                {/* Location */}
                {location && (
                  <li className=' is-size-4 level-item'>
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
                  <li className='is-size-5'>
                    <strong>Bio:&nbsp;</strong>
                    {bio}
                  </li>
                ) : (
                  <li className='is-size-5'>
                    <strong>Bio:</strong>{' '}
                    <i className='fas fa-times-circle has-text-danger'></i> Not
                    Provided
                  </li>
                )}
                {/* Company */}
                {company ? (
                  <li className='is-size-5'>
                    <strong>Company:&nbsp;</strong> {company}
                  </li>
                ) : (
                  <li className='is-size-5'>
                    <strong>Company:</strong>{' '}
                    <i className='fas fa-times-circle has-text-danger'> </i> Not
                    Provided
                  </li>
                )}
                {/* Year Created */}
                {created_at ? (
                  <li className='is-size-5'>
                    <strong>Account Created:</strong>{' '}
                    {created_at.substring(0, 4)}
                  </li>
                ) : (
                  <li className='is-size-5'>
                    <strong>Account Created:</strong>{' '}
                    <i className='fas fa-times-circle has-text-danger'> </i> Not
                    Provided
                  </li>
                )}
                {/* Website */}
                {blog ? (
                  <li className='is-size-5'>
                    <strong>Site:</strong> {blog}
                  </li>
                ) : (
                  <li className='is-size-5'>
                    <strong>Site:</strong>{' '}
                    <i className='fas fa-times-circle has-text-danger'> </i> Not
                    Provided
                  </li>
                )}
                {/* Email */}
                {email ? (
                  <li className='is-size-5'>
                    <strong>Email:</strong> {email}
                  </li>
                ) : (
                  <li className='is-size-5'>
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
                    <div className='tag is-dark is-size-6'>Followers</div>
                    <div className='tag is-primary is-rounded is-size-6'>
                      {followers}
                    </div>
                  </div>
                </div>
                {/* Following */}
                <div className='control'>
                  <div className='tags has-addons'>
                    <div className='tag is-dark is-size-6'>Following</div>
                    <div className='tag is-warning is-rounded is-size-6'>
                      {following}
                    </div>
                  </div>
                </div>
                {/* Public Repositories */}
                <div className='control'>
                  <div className='tags has-addons'>
                    <div className='tag is-dark is-size-6'>Public Repos</div>
                    <div className='tag is-success is-rounded is-size-6'>
                      {public_repos}
                    </div>
                  </div>
                </div>
                {/* Public Gists */}
                <div className='control'>
                  <div className='tags has-addons'>
                    <div className='tag is-dark is-size-6'>Public Gists</div>
                    <div className='tag is-info is-rounded is-size-6'>
                      {public_gists}
                    </div>
                  </div>
                </div>
              </div>
              {/* GitHub Button */}
              {html_url ? (
                <a
                  href={html_url}
                  className='button is-medium is-dark is-rounded is-size-4-desktop is-size-5-touch content-margin'
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
  }
}
export default SingleUser;
