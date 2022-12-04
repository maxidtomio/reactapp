import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';
import Icons from '../Icons/Icons';
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import './styleCartContainer.css'

const CartContainer = () => {

    const { carrito, clear, total } = useContext(GlobalContext)

    return (
        <>
            <div className='container-fluid p-5'>

                <h2 className='text-center pb-3'>Mi carrito</h2>

                <div>
                    {carrito.length > 0 && (
                        <>
                            <div className='clear'>
                                <button onClick={() => clear(carrito)} className='noselect'>
                                    <span className="text">Vaciar carrito</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {carrito.length > 0 ?
                    <>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='cart_container cart_scroll'>
                                    {carrito.map((item, index) => <CartItem key={index} item={item} />)}
                                </div>
                                <div>
                                    <Link to="/ItemListContainer" className='d-flex justify-content-center mt-3'>
                                        <button className="boton mx-center mb-4">
                                            CONTINUAR COMPRANDO
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm12'>
                                <Checkout total={total(carrito)} items={carrito} />
                            </div>
                        </div>
                    </>
                    :
                    (
                        <>
                            <div className='alert alert-info d-flex justify-content-center align-items-center' role="alert">
                                <div className='mr-2'><Icons Icon={BsInfoCircle} color={"#0c5460"} size={"19px"} /></div>
                                Tu carrito de compras está vacío.
                                Comenzá a llenarlo con nuestros productos.
                            </div>
                            <div className="mt-5 d-flex justify-content-center back">
                                <Link to={`/ItemListContainer`}>
                                    <button className='d-flex justify-content-center align-items-center botonBack'>
                                        <Icons Icon={HiOutlineArrowNarrowLeft} color={"111111"} size={"20px"} className='pb-1' />
                                        <span className='botonSpan ml-2'>Volver a la tienda</span>
                                    </button>
                                </Link>
                            </div>
                        </>
                    )
                }
            </div>

        </>
    )
}

export default CartContainer