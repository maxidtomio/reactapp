import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../Service/Firebase';
import { GlobalContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';
import {getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const { ItemId } = useParams();
    const [product, setProduct] = useState ({});
    const {loading, setLoading} = useContext (GlobalContext);

    const fetchGetItem = async () => {

        setLoading(true)

        const item = doc (db, 'productos', ItemId)
    
        try {
          const prod = await getDoc (item)
          const result =  ({id:prod.id, ...prod.data()})
          setProduct (result)
          console.log (result)
          setLoading(false)
          
        } catch (error) {
          console.log (error)
        }
    }

    useEffect(() => {

        fetchGetItem ();
        
    }, [ItemId]);
    
    return (
        <>
            {loading ? (<Loading/>) : (
                <ItemDetail item={product}/>) 
            }
        </>
        
    );
}

export default ItemDetailContainer