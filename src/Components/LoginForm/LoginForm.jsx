import React, { useState, useEffect } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [currentImage, setCurrentImage] = useState('/src/assets/i1.jpg'); // Default image

  const images = [
    '/src/assets/i1.jpg',
    '/src/assets/i2.jpg',
    '/src/assets/i3.jpg',
    '/src/assets/i4.jpg',
    '/src/assets/i5.jpg',
    '/src/assets/i6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        return images[(currentIndex + 1) % images.length];
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = userData;
    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    setError('');
    console.log('Logged in with:', userData);
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url('${currentImage}')` }}>
      <div className="login-form-container">
        <h2 className="login-title">Member Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;