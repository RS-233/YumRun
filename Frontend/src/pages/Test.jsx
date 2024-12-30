import React from 'react'
import { useState } from 'react'
import './Test.css'

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$50', image: 'https://via.placeholder.com/150' },
  ];

const Test = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
  
    return (
      <div className="slider-container">
        <button className="nav-button" onClick={prevSlide}>❮</button>
        <div className="product-card">
          <img src={products[currentIndex].image} alt={products[currentIndex].name} />
          <h3>{products[currentIndex].name}</h3>
          <p>{products[currentIndex].price}</p>
        </div>
        <button className="nav-button" onClick={nextSlide}>❯</button>
      </div>
    );
}

export default Test
