import React, { useState } from 'react'
import './App.css';
import SingleCard from './components/singleCard';
import { useTheme } from './hooks/useTheme'
import star from './assets/star.svg'


const cardImages = [
  { "src": "/img/thesun.PNG", "name": "The Sun", "description": "You will win"},
  { "src": "/img/themoon.PNG", "name": "The Moon", "description": "You will see the light" },
  {  "src": "/img/thefool.PNG", "name": "The Fool", "description": "You will never lose, keep being a fool."},
  {  "src": "/img/theempress.PNG", "name": "Empress", "description": "You are magic."}
];

const cardImagesb = [
  { "src": "/img/nice2.PNG", "name": "new", "description": "You will never see the light" },
  { "src": "/img/The Moon.PNG", "name": "The Moon", "description": "You will see the light, but too late" },
  {  "src": "/img/The Fool.PNG", "name": "The Fool", "description": "You will be embarrased."}
]


function App() {
  const [ cards, setCards ] =useState([]);
  const [ s, setS ] = useState([]);
  const { changeMode, mode, ctype, changeCards, } = useTheme();
  


  


  const shuffleCards = () => {
    const shuffledCard = [...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => 
    ({ ...card, id:Math.random()}))
    
    setCards(shuffledCard)
   

  }
  

  const shuffleCards2 = () => {
    const shuffledCard2 = [...cardImagesb]
    .sort(() => Math.random() -0.5)
    .map((card) => 
    ({ ...card, id:Math.random()}))
    
    setS(shuffledCard2)
   
  
  }


  const reset = () => {
    shuffleCards()
    shuffleCards2()
   
  }


  const toggleMode= () => {
 changeMode( mode === 'nightmare' ?  'dream' : 'nightmare')
 changeCards( ctype === 'dre' ? 'night' : 'dre')
}



  return(
    <div className={ `App ${mode}`}>
      <div className="mode-toggle">
          <img
          onClick={toggleMode}
          src={ star } 
          alt="dark/light mode icon"
          style={{ filter: mode === 'nightmare' ? 'invert(100%)' : 'invert(20%)'}}
          />
 </div>
      <h1> AI Tarot </h1>
      <h3> Welcome, to the A.I Tarot - here, your dreams can become crystal clear,
        <br/> and your nightmares as well!</h3>
        
      <button onClick={reset}> make a choice </button>
      <h4> You are currently in : { mode } mode</h4>
  
    { ctype === 'dre' && (
   <div className="grid1">
   {cards.slice(0, 3).map(card => (
  <SingleCard key={card.id} card={card}  />
   ))}
   </div>
   )}

{ ctype === 'night' && (
   <div className="grid2">
   {s.slice(0, 3).map(card => (
  <SingleCard key={card.id} card={card} />
   ))}
   </div>
   )}
   </div>
  
  )}


export default App;
