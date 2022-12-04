import React, { useContext } from 'react'
import Icons from '../Icons/Icons';
import { FaShoppingCart } from 'react-icons/fa';
import './styleCartWidget.css'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { carrito } = useContext(GlobalContext)

    return (
        <Link to={`/Cart`} className="link">
            <div className='d-flex justify-content-center'>
                <Icons Icon={FaShoppingCart} color={"FFFFFF"} size={"23px"} />
                <span className='ml-1 text-white'>({carrito.length})</span>
            </div>
        </Link>

    )
}

export default CartWidget