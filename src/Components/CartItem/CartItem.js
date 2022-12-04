import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import './styleCartItem.css'


const CartItem = ({ item: { pictureUrl, title, category, quantity, price, id } }) => {

  const { removeItem } = useContext(GlobalContext)

  return (
    <div className='container_cartItem'>
      <div className='row d-flex cartItem'>
        <div className='col-lg-4 col-md-4 container_cartImg'>
          <img src={pictureUrl} alt={title} />
        </div>
        <div className='col-lg-4 col-md-4 container_cartInfo'>
          <p>{title}</p>
          <p className='text-capitalize'>Categoría: {category}</p>
          <p>Cantidad: {quantity}</p>
          <p>Precio: ${price}</p>
        </div>
        <div className='col-lg-4 col-md-4 container_cartSubTotal'>
          <p>Sub-total: ${quantity * price}</p>
          <div className='remove d-flex' onClick={() => removeItem(id)}>
              Eliminar
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem