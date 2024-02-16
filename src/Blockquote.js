import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Blockquote() {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const quoteStyle = {
    textAlign: 'center',
    fontSize: '70px',
    color: '#b33b3b',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '40px',
    color: '#cac3c3',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
  };

  const contentStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#cac3c3',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', 
  };

  return (
    <div style={containerStyle}>
      
      <blockquote style={subtitleStyle}>
        Gymnazien Where Excellence Takes Center Stage.
      </blockquote>
      <div style={contentStyle}>
        
      </div>
    </div>
  );
}

export default Blockquote;
