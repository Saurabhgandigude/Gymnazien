import React from 'react';
import './ImageLayout.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
const ImageLayout = () => {
  return (
    <div className="image-layout">
      <div className="large-image-container text-center">
        <img
          src="ALCG4903.JPG" // Replace with the URL of your large image
          alt="Large"
          className="large-image"
        />
      </div>
     
    </div>
  );
};

export default ImageLayout;
