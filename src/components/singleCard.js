import React, { useState } from 'react'
 import './singleCard.css'




export default function SingleCard({card, desc}) {
    const [ flipped, setFlipped ]= useState()
    const [ showDesc, setShowDesc] = useState(desc)
    const [ modalOpen, setModalOpen] = useState("false")
    const [close, setClose] = useState("true")

    const showDescription = () => {
        setShowDesc(card.description)
        setModalOpen( modalOpen === true ? "false" : 'true')
        setClose( close === false? "true" : false)
     

    }
    console.log(modalOpen)
    console.log("close", close)


    return (
       
        <div className="card">
        <div className={flipped ? "flipped" : "undefined"}>
       <img className="front" src={card.src} alt="card front" onClick={setFlipped === "true" } />
       <img className="back" src="/img/back1.png" alt="card back" onClick={setFlipped } />

       <div className="card-info">
        <div className={flipped ? "" : "desc"}>
        <div className='card-descriptions'>
           <p>{card.name}</p>
           <button onClick={showDescription}> elaborate </button>
           <div className={ modalOpen === false ? "" : "modal"}>
         
           <div className={flipped ? " " : "desc"}>
           <div className={close ? "modal" : "closed"}>
           <p>{showDesc} </p>

        {/* //button  */}
       <button className="close-btn" onClick={showDescription}>
        <i class="fa fa-times"></i>
           </button>
           </div>
        </div>
        </div>
       
          
           
          
           </div>
       
           </div>
           </div>
          
          
      </div>
     
      </div>
          
    )
}