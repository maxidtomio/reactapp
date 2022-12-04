import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import Icons from '../Icons/Icons';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import './styleItemCount.css'

const ItemCount = ({ item, initial }) => {

    const [quantity, setQuantity] = useState(initial);
    const { carrito, addItem, isInCart } = useContext(GlobalContext);

    const product = item && {
        ...item,
        quantity,
    };

    const onAdd = () => {
        if (quantity > 0 || item.stock > 0) {
            addItem(product)
        }
    }

    const handleRemoveItem = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'ESTA ACCIÓN ES INCORRECTA',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const handleAddItem = () => {
        if (quantity < item.stock) {
            setQuantity(quantity + 1);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'DISCULPE, NO HAY MÁS STOCK',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    return (
        <>
            {!isInCart(carrito, item) ? (
                <div className='container-fluid d-flex flex-column align-items-center'>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="add" onClick={handleRemoveItem}>−</button>
                        <p className='counter'>{quantity}</p>
                        <button type="button" className="add" onClick={handleAddItem}>+</button>
                    </div>

                    <button type="button" className="boton mt-3 mb-4" onClick={() => onAdd(product)}>AÑADIR AL CARRITO</button>
                    
                </div>
            ) : (
                   <Link to="/Cart" className='d-flex justify-content-center'>
                        <button className="boton mx-center mb-4">
                            IR AL CARRITO
                        </button>
                    </Link> 
            )}
            <div className="back align-items-center">
                <Link to={`/ItemListContainer`} className='d-flex justify-content-center'>
                    <button className='d-flex justify-content-center align-items-center botonBack'>
                        <Icons Icon={HiOutlineArrowNarrowLeft} color={"111111"} size={"20px"} className='pb-1' />
                        <span className='botonSpan ml-2'>Volver a la tienda</span>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ItemCount