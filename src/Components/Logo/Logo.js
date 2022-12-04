import React from 'react';
import {Link} from 'react-router-dom';
import mate from '../../Assets/mate.png';
import './styleLogo.css';

const Logo = () => {
    return (
        <Link className="navbar-brand logo" to="/">
            <img src={mate} alt="logotipo" loading='Mateico' />
            <div>
                <div>
                    <h1 className='border'>Rincón del mate</h1>
                    <h1 className='wave'>Rincón del mate</h1>
                </div>
                <p></p>
            </div>
        </Link>
    )
}

export default Logo