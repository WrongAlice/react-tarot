import React, { useState } from 'react'
 import './singleCard.css'




export default function SingleCard({card, desc}) {
    const [ flipped, setFlipped ]= useState()
    const [ showDesc, setShowDesc] = useState(desc)
    const [ modalOpen, setModalOpen] = useState("false")

    const showDescription = () => {
        setShowDesc(card.description)
        setModalOpen( modalOpen === true ? "false" : 'true')

    }
    console.log(modalOpen)
    return (
       
        <div className="card">
        <div className={flipped ? "flipped" : "undefined"}>
       <img className="front" src={card.src} alt="card front" onClick={setFlipped === "true" } />
       <img className="back" src="/img/back.png" alt="card back" onClick={setFlipped } />

       <div className="card-info">
        <div className={flipped ? "" : "desc"}>
        <div className='card-descriptions'>
           <p>{card.name}</p>
           <button onClick={showDescription}> elaborate </button>
           <div className={ modalOpen === false ? "close" : "modal"}>
           <p>{showDesc} </p>
           </div>
       
          
           
          
           </div>
       
           </div>
           </div>
          
          
      </div>
     
      </div>
          
    )
}