import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Product.css';

function Product({ id, imageUrl, name, description, price, rating }) {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}> {/* Navigate to the product details page */}
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{description}</p>
          {price ? (
            <div className="product-price">${price}</div>
          ) : (
            <div className="product-price">Price not available</div>
          )}
          {rating != null ? (
            <div className="product-rating">{`⭐ ${rating}`}</div>
          ) : (
            <div className="product-rating">No rating</div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Product;
