import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroImage from '../../assets/hero.jpg'; // Make sure this path is correct

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/login');
  };

  return (
    <div className="hero container" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-text">
        <h1>Planning, Executing and Perfecting your most memorable moments</h1>
        <button className="btn explore-btn" onClick={handleExploreClick}>
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Hero;
