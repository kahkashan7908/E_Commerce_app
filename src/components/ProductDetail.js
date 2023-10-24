import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail__info">
        <h2 className="product-detail__title">{product.name}</h2>
        <p className="product-detail__price">₹ {product.price}</p>
        <p className="product-detail__description">{product.description}</p>
        <button onClick={handleAddToCart} className="product-detail__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;