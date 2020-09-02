import React, { Fragment } from 'react';
// About Page
const About = () => {
  return (
    <Fragment>
      <div className='section section-padding'>
        <h1 className='is-size-2 has-text-centered'>About GitHub Finder</h1>
        <div className='section section-padding'>
          {' '}
          <p className='has-text-centered is-size-4'>
            This is an app that was created to search for GitHub profiles using
            the GitHub API.
          </p>
          <p className='has-text-centered is-size-4'>
            It was built using React, Bulma and Axios as part of an assessment
            task for my diploma.
          </p>
          <p className='has-text-centered is-size-4'>
            This version of the project uses React Hooks and has added recent
            repositories to the user profiles.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
