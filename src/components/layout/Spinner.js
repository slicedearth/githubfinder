import React, { Fragment } from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
  return (
    <Fragment>
      <img className='spin-img' src={spinner} alt='loading...' />
    </Fragment>
  );
};
export default Spinner;
