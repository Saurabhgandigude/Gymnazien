// src/components/MixedCards.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Card({ title, text, imageSrc }) {
  return (
    <div className="card" style={{ width: '300px', height: '300px', margin: '0 5px', borderRadius: '10px', overflow: 'hidden' }}>
      <div className="card-bg" style={{ filter: 'blur(10px)', backgroundColor: 'rgba(169, 169, 169, 0.5)', width: '100%', height: '80%', position: 'absolute' }} />
      <img src={imageSrc} className="card-img-top" alt="Card Image" style={{ width: '30%', height: '30%', objectFit: 'cover', objectPosition: 'center top' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

function MixedCards() {
  const cardData = [
    {
      title: "Organisation In a Few Minutes",
      text: "Increase the number of competitions and reduce the time for the organisation from a few months to a few minutes.",
      imageSrc: "clock.png" // Replace with your actual image source
    },
    {
      title: "Next Level of Documenting Competitions",
      text: "In Elevien you can document existing competitions with video recordings and live scoring.",
      imageSrc: "notes.png" // Replace with your actual image source
    },
    {
      title: "Possibility of New Formats",
      text: "Create new formats of competitions and invite participants directly from the application.",
      imageSrc: "bulb.png" // Replace with your actual image source
    }
  ];

  const whatWeDoText = "🌟 What We Do:<br/>Crafting visually stunning narratives, Gymnazien inspires a global audience with the artistry of gymnastics.<br/><br/>";

  return (
    <div className="background-wrapper" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
      <div className="card-group" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {cardData.map((data, index) => (
          <Card key={index} title={data.title} text={data.text} imageSrc={data.imageSrc} />
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: whatWeDoText }} />
    </div>
  );
}

export default MixedCards;
