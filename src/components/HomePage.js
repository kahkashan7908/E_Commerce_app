import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './Home.css';

const HomePage = ({ products}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories = [...new Set(products.map(product => product.category))];

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="home-page">
      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={handleChangeCategory}
        >
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
