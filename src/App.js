import React, { useState } from 'react'
import './App.css';
import SingleCard from './components/singleCard';
import { useTheme } from './hooks/useTheme'
import star from './assets/star.svg'


const cardImages = [
  { "src": "/img/The Sun.PNG", "name": "The Sun", "description": "You will win"},
  { "src": "/img/The Moon.PNG", "name": "The Moon", "description": "You will see the light" },
  {  "src": "/img/The Fool.PNG", "name": "The Fool", "description": "You will lose youre  asupid poopei pants skjfkjnf" }
]


function App() {
  const [ cards, setCards ] =useState([])
  const { color, changeColor, changeMode, mode } = useTheme()
  


  const shuffleCards = () => {
    const shuffledCard = [...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => 
    ({ ...card, id:Math.random()}))
    
    setCards(shuffledCard)
    console.log(shuffledCard)
  }


  const reset = () => {
    shuffleCards()

  }

  const toggleMode= () => {
 changeMode(mode === 'dark' ?  'light' : 'dark')
}
console.log( mode)

  return(
    <div className={ `App ${mode}`}>
      <div className="mode-toggle">
          <img
          onClick={toggleMode}
          src={ star } 
          alt="dark/light mode icon"
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
          />
 </div>
      <h1> AI Tarot </h1>
      <p> Welcome, to the A.I Tarot - here, your dreams can become crystal clear,
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
