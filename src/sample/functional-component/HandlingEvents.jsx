import React, { useState } from 'react'

const EventHandling = ()=>{
    const purple= "#8e44ad";
     const [bg, setBg] = useState(purple)
     const [name, setName] = useState('click me!!');

     const bgChange=()=>{
         let newBg= '#FFF';
         setBg(newBg);
         setName('Fuck You!!')
     }

     return(
         <React.Fragment>
            <button onClick={bgChange} style={{backgroundColor: bg, color: '#000'}} >{name}</button>
         </React.Fragment>
     )

}

export default EventHandling;