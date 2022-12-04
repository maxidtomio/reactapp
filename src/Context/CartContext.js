import React, {createContext, useState} from 'react';
import Swal from "sweetalert2";
export const GlobalContext = createContext ('')


const CartContext = ({children}) => {
    
  const [carrito, setCarrito] = useState ([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  
  const addItem = (item) => {
    if (isInCart(carrito, item)) {
      setCarrito(joinItem(carrito, item))
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'EL PRODUCTO YA FUE AGREGADO. DIRIJASE AL CARRITO DE COMPRAS',
        showConfirmButton: false,
        timer: 1500
    })
    } else {
      setCarrito([...carrito, item])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'PRODUCTO CORRECTAMENTE AGREGADO',
        showConfirmButton: false,
        timer: 1500
    })
    }
  };

  const isInCart = (carrito, item) => {
    return carrito.some( x => x.id === item.id )
  };
  
  const joinItem = (carrito, item) =>{
    return carrito.map((x) => {
      if(x.id === item.id){
        x.quantity = item.quantity;
        x.stock = item.stock;
      }
      return x;
    } )
  };

  const removeItem = (id) =>{
    setCarrito(carrito.filter (y => y.id !== id)) 
  }; 

  const clear = () => {
    setCarrito ([])
  };
  
  const total = (carrito) => {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].quantity * carrito[i].price;
    }
    return suma;
  };
    
  return (
    <GlobalContext.Provider value={{
      carrito, 
      addItem,
      isInCart,
      removeItem, 
      clear, 
      total,
      loading,
      setLoading,
      search,
      setSearch,
      }}>
        {children} 
    </GlobalContext.Provider> 
  ) 
}

export default CartContext