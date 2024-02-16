import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Gradient() {
  const gradientContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
     
  };

  const gradientStyle = {
    width: '140vh',
    height: '60vh',
    background: 'linear-gradient(to right, #de2020, #cd4949)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold',
    margin: 'auto', // Center the box
    //padding: '0 20px', // Add padding for better spacing
  };

  const imageStyle = {
    width: '500px', // Adjust image width as needed
    height: '300px',
  };

  const aimTextStyle = {
    textAlign: 'left',
  //  marginTop: '20px', // Add margin for spacing
    maxWidth: '600px', // Add a maximum width for the text
  };

  return (
    <div style={gradientContainerStyle}>
      <div style={gradientStyle}>
        <div>
          For<br/> organisers
        </div>
        <img src="ABAL2864.JPEG" style={imageStyle} />
      </div>
      <div style={aimTextStyle}>
        🚀 Our Aim:<br/>
        As a catalyst for positive change, Gymnazien provides a digital stage for gymnasts and extends impact through SMMA.<br/><br/>
      </div>
    </div>
  );
}

export default Gradient;
