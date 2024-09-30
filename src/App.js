// src/App.js
//<div className="rectangle">
//<div className="shadow"></div>
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import './components/RectangleWithShadow.css';

function App() {
  return (
    <div className="app-container">
      

      <div className="welcome-section">

      
      
        <Welcome />
      </div>
      
      
      
      <div className="login-section">
        <Login />
      </div>
    </div>
  );
}

export default App;

