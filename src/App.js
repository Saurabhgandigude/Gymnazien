import React from 'react';
import Navbar from './Navbar';
import Closingimages from'./Closingimages';
import Gradient from './Gradient';
import Blockquote from './Blockquote';

import Imageover from './Imageover';
import Card from './Card'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './style.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Blockquote/>
      <Closingimages/>
      <Gradient/>
      
      
      <Imageover/>
      <Card/>
      <Footer/>
      
    </div>
  );
}

export default App;
