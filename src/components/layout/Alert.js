import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`is-size-5 alert alert-${alert.searchType}`}>
        <i className='fas fa-info-circle'>&nbsp;</i>
        {alert.searchMsg}
      </div>
    )
  );
};

export default Alert;
