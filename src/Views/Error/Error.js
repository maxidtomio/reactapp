import React from 'react';
import './styleError.css';

const Error = () => {
  return (
    <div className='container-fluid errorContainer'>
      <div className='errorPag d-flex flex-column justify-content-center align-items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFv8T-0LmajUi_Zpm0NZnGCxfi2sEVL9yMTg&usqp=CAU" alt="error 404" />
        <h5 className='pt-5 text-uppercase'>La página que estás buscando no existe.</h5>
      </div>
    </div>
  )
}

export default Error