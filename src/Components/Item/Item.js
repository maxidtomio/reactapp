import React from 'react';
import { Link } from 'react-router-dom';
import './styleItem.css';


const Item = ({item: {id, title, pictureUrl, category, description, price, stock, images},}) => {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img className="card-img-top" src={pictureUrl} alt={title}/>
        <div className="card-body">
          <p className="card-category">{category}</p>
          <p className="card-title">{title}</p>
          <p className="card-price font-bold">${price}</p>
          <Link to={`/ItemDetailContainer/${id}`}>
            <button className="boton">
              VER DETALLES
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item