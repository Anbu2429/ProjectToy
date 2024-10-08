import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Home.css';

function Home({ onSignOut }) {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigateToProducts = () => {
        navigate('/products'); // Replace with your desired route for products
    };

    return (
        <div className="home-container">
            <h1 className="home-text">Welcome to the <br />Toy Store</h1>
            <p className="home-text1">Explore our toy wonderland</p>
            <img src="https://example.com/toy-store-image.jpg" alt="Toy Store" className="home-image" />
            <p className="home-text2">Buy two get one free!</p>
            <button className="sign-out-button" onClick={onSignOut}>Sign Out</button>
            <button className="products-button" onClick={handleNavigateToProducts}>
                View Products
            </button>
        </div>
    );
}

export default Home;
