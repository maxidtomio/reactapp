import React, {useState} from 'react';
import Carousel from '../Carousel/Carousel';
import ItemCount from '../ItemCount/ItemCount';
import './styleItemDetail.css';

const ItemDetail = ({item}) => {

    const [stock] = useState(item.stock);

    return (
        <>
            <div className='detail'>
                <div className='row container-fluid'>
                    <div className='col-lg-8 col-md-12 carrusel'>
                        {item.images && <Carousel images={item.images} />}
                    </div>
                    <div className="col-lg-4 col-md-12 information">
                        <h3 className='title'>{item.title}</h3>
                        <h4 className='price'>${item.price}</h4>
                        <p className='description'>{item.description}</p>
                        <p className='stock'>{stock} DISPONIBLES</p>
                        <div className='rating'>
                            <input type="radio" name="rating" value="5" id="5"/>
                            <label htmlFor='5'>☆</label>
                            <input type="radio" name="rating" value="4" id="4"/>
                            <label htmlFor='4'>☆</label>
                            <input type="radio" name="rating" value="3" id="3"/>
                            <label htmlFor='3'>☆</label>
                            <input type="radio" name="rating" value="2" id="2"/>
                            <label htmlFor='2'>☆</label>
                            <input type="radio" name="rating" value="1" id="1"/>
                            <label htmlFor='1'>☆</label>
                        </div>

                        <div>
                            <ItemCount 
                                item={item}
                                initial={1}
                            />
                        </div>

                        <p className='category'>CATEGORÍA: {item.category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail