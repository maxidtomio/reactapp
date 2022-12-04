import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import Home from '../Views/Home/Home';
import Layout from '../Components/Layout/Layout';
import Contact from '../Views/Contact/Contact';
import Error from '../Views/Error/Error';
import CartContainer from '../Components/CartContainer/CartContainer';

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Layout/>}>
                  <Route index element= {<Home/>}/>
                  <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/ItemDetailContainer/:ItemId" element = {<ItemDetailContainer/>}/>
                  <Route path="/ItemListContainer/:CategoryId" element = {<ItemListContainer/>}/>
                  <Route path="/Cart" element = {<CartContainer/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas