import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" style={{height:'200px'}}/>
      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">₹ {product.price}</p>
        <Link to={`/product/${product.id}`} className="product-card__details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;