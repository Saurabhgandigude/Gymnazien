import React, { useState } from 'react';

const ImageCube = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Adjusted to column layout
    justifyContent: 'center',
    alignItems: 'center',
    height: '120vh', // Adjust the height as needed
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 300px)',
    gridGap: isHovered ? '10px' : '50px',
  };

  const customImageStyles = [
    { width:'300px' },
    { width:'300px' },
    { width:'300px' },
    { width:'300px' },
    { width:'300px' },
    { width:'300px' },
  ];

  const textStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#333',
    marginTop: '20px',
  };

  return (
    <div
      style={containerStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div style={gridStyle}>
        {[1, 2, 3, 4, 5, 6].map((imageNumber, index) => (
          <img
            key={imageNumber}
            src={`/no${imageNumber}.jpeg`}
            alt={`Image ${imageNumber}`}
            style={{ ...customImageStyles[index], transition: 'grid-gap 0.5s ease-in-out' }}
          />
        ))}
      </div>
      <div style={textStyle}>
      At Gymnazien, we embark on a mission to celebrate, promote, and elevate
        the world of gymnastics.<br /> Our platform is more than just a space
        for enthusiasts; it's a creative hub, a digital arena where passion
        meets purpose.<br /> Here's a glimpse into what we do and the lofty
        goals that drive us.      </div>
    </div>
  );
};

export default ImageCube;
