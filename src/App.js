import React, { useState } from 'react'
import './App.css';


const cardImages = [
  { "src": "/img/The Sun.PNG", "name": "The Sun", "description": "You will win"},
  { "src": "/img/The Moon.PNG", "name": "The Moon", "description": "You will see the light" },
  {  "src": "/img/The Fool.PNG", "name": "The Fool", "description": "You will lose" }
]


function App() {
  const [ cards, setCards ] =useState([])
  // const [ cardOne, setCardOne ] =useState()
  // const [ cardTwo, setCardTwo ] =useState()
  // const [ cardThree, setCardThree ] =useState()
  const [ flipped, setFlipped ]= useState()
  // const [ noshow, setNoshow ] = ("false")
  


  const shuffleCards = () => {
    const shuffledCard = [...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => ({ ...card, id:Math.random()}))
    
    setCards(shuffledCard)
    console.log(shuffledCard)
  }


  const reset = () => {
    setFlipped()
    shuffleCards()
    // setNoshow("true")
  }

  return(
    <div className="App">
      <h1> AI Tarot </h1>
    <button onClick={reset}> draw </button>

   <div className="grid">
   {cards.slice(0, 3).map(card => (
     <div className="card" key={card.id}>
  <div className={flipped ? "flipped" : "undefined"}>
 <img className="front" src={card.src} alt="card front" onClick={setFlipped === "true" } />
 <img className="back" src="img/back.PNG" alt="card back" onClick={setFlipped } />
 <div className="card-info">
  <div className={flipped ? "" : "desc"}>
  
     <p>{card.name}</p>
     <p> {card.description}</p>
     </div>
     </div>
    
</div>
</div>
    
   ))}
   </div>
   </div>
  )}


export default App;
