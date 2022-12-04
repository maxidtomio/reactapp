import React from 'react';
import './styleContact.css';

const Contact = () => {
  return (
    <div className='container-fluid contact'>
      <div className='row'>
        <div className='col-md-6 mx-auto my-auto text-center text-uppercase'>
          <h2 className='contact_title'>¡escribinos!</h2>
          <h5>nos encantaría leerte</h5>
        </div>
        <div className='col-md-6 mx-auto text-uppercase'>
          <form className='contact_form'>
            <label>nombre</label>
            <input type="text" name='name'/>
            <label>email</label>
            <input type="email" name='email'/>
            <label>asunto</label>
            <input type="text" name='subject' />
            <label>mensaje</label>
            <textarea name="comments" id="comments"></textarea>
            <button className='boton mt-4'>enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact