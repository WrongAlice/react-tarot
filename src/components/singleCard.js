import React, { useState } from 'react'




export default function SingleCard({card}) {
    const [ flipped, setFlipped ]= useState()
    return (
        <div className="card">
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
          
    )
}