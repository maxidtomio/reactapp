import React, { useState } from 'react';
import './styleCarousel.css';

const Carousel = ({ images }) => {

    const [selectedImg, setSelectedImg] = useState(images[0])
    
    return (
        <>
            <div className='carrusel-left d-flex flex-column'>
                {images.map((img, index) => (
                <img 
                    key= {index}
                    src={img}
                    alt="img"
                    onClick = {() => setSelectedImg (img)}
                />))}
            </div>
            <div className='carrusel-right'>
                <img src={selectedImg} alt="selected" />
            </div>
        </>
    )
}

export default Carousel