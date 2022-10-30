import React, { useState } from 'react'
import './App.css';
import SingleCard from './components/singleCard';
import { useTheme } from './hooks/useTheme'
import star from './assets/star.svg'


const cardImages = [
  { "src": "/img/The Sun.PNG", "name": "The Sun", "description": "You will win"},
  { "src": "/img/The Moon.PNG", "name": "The Moon", "description": "You will see the light" },
  {  "src": "/img/The Fool.PNG", "name": "The Fool", "description": "You will never lose."}
]

const cardImagesb = [
  { "src": "/img/nice1.PNG", "name": "new", "description": "You will die"},
  { "src": "/img/nice2.PNG", "name": "new", "description": "You will never see the light" },
  { "src": "/img/The Moon.PNG", "name": "The Moon", "description": "You will see the light" },
  {  "src": "/img/The Fool.PNG", "name": "The Fool", "description": "You will never lose."}
]


function App() {
  const [ cards, setCards ] =useState([])
  const [ s, setS ] = useState([])
  const { changeMode, mode, ctype, changeCards } = useTheme()


  


  const shuffleCards = () => {
    const shuffledCard = [...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => 
    ({ ...card, id:Math.random()}))
    
    setCards(shuffledCard)
   
    console.log(shuffledCard)
  }
  

  const shuffleCards2 = () => {
    const shuffledCard2 = [...cardImagesb]
    .sort(() => Math.random() -0.5)
    .map((card) => 
    ({ ...card, id:Math.random()}))
    
    setS(shuffledCard2)
   
    console.log(shuffledCard2)
  }


  const reset = () => {
    shuffleCards()
    shuffleCards2()
   
  }

  //i have two separate arrays as of here

  //toggles my reducer state

  const toggleMode= () => {
 changeMode( mode === 'nightmare' ?  'dream' : 'nightmare')
 
 changeCards( ctype === 'dre' ? 'night' : 'dre')
}



console.log( mode)
console.log(ctype)

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
  <SingleCard key={card.id} card={card} />
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
