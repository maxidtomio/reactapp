import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Search from '../Search/Search';
import { Link, NavLink} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './styleNavBar.css';

const NavBar = () => {

    return (
        <>
            <header className='sticky-top'>
                <div className="text-center nav1">
                    <div className="container-fluid">
                        <div className="row pb-2">
                            <div className="buscador">
                                <Search/>
                            </div>
                            <div className="widget">
                                <CartWidget />
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark nav-custom nav2">
                    <div className="container-fluid">
                        <Logo/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to="/">inicio</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-uppercase" href="/" id="navbardrop"
                                        data-toggle="dropdown">productos</a>
                                    <div className="dropdown-menu">
                                        <Link to={`/ItemListContainer/mates`} className="dropdown-item text-uppercase">mates</Link>
                                        <Link to={`/ItemListContainer/bombillas`} className="dropdown-item text-uppercase">bombillas</Link>
                                        <Link to={`/ItemListContainer/materas`} className="dropdown-item text-uppercase">materas</Link>
                                        <Link to={`/ItemListContainer/termos`} className="dropdown-item text-uppercase">termos</Link>
                                        <Link to={`/ItemListContainer`} className="dropdown-item text-uppercase">ver todos</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to="/Contact">contacto</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar