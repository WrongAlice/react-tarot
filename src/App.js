import React, { useState } from 'react'
import './App.css';
import SingleCard from './components/singleCard';


const cardImages = [
  { "src": "/img/The Sun.PNG", "name": "The Sun", "description": "You will win"},
  { "src": "/img/The Moon.PNG", "name": "The Moon", "description": "You will see the light" },
  {  "src": "/img/The Fool.PNG", "name": "The Fool", "description": "You will lose" }
]


function App() {
  const [ cards, setCards ] =useState([])
  


  const shuffleCards = () => {
    const shuffledCard = [...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => ({ ...card, id:Math.random()}))
    
    setCards(shuffledCard)
    console.log(shuffledCard)
  }


  const reset = () => {
    shuffleCards()

  }

  return(
    <div className="App">
      <h1> AI Tarot </h1>
      <p> Welcome, to the A.I Tarot - here, youre dreams can become crystal clear,
        <br/> and your nightmares as well!</p>
      <button onClick={reset}> choose your fate </button>
  

   <div className="grid">
   {cards.slice(0, 3).map(card => (
  <SingleCard key={card.id} card={card} />
   ))}
   </div>
   </div>
  )}


export default App;
