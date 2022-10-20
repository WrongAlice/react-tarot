import React, { useState } from 'react'
import './App.css';


const cardImages = [
  { "src": "/img/The Sun.PNG", "description": "The sun is a powerful force in nature and in our psyche. Follow her and you will succeed"},
  { "src": "/img/The Moon.PNG" },
  {  "src": "/img/The Fool.PNG" }
]


function App() {
  const [ cards, setCards ] =useState([])

  const shuffleCards = () => {
    const shuffledCard = [...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => ({ ...card, id:Math.random()}))
    
    setCards(shuffledCard)
  }

  return(
    <div className="App">
      <h1> tarot </h1>
    <button onClick={shuffleCards}> draw </button>

   <div className="grid">
   {cards.slice(0, 1).map(card => (
     <div className="card" key={card.id}>
 <div className="card-info">

     <img className="front" src={card.src} alt="card front" />
     <p> {card.description}</p>
</div>
</div>
    
   ))}
   </div>
   </div>
  )}


export default App;
