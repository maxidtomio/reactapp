import React from 'react';
import { Link } from 'react-router-dom';
import './styleCategory.css';

const Category = ({ imagen, CategoryId }) => {
    return (
        <div className='col-md-3 col-sm-6 category_container'>
            <Link to={`/ItemListContainer/${CategoryId}`}>
                <img src={imagen} alt={CategoryId} />
                <div className='category_text'>
                    <h4>{CategoryId}</h4>
                </div>
            </Link>
        </div>
    )
}

export default Category