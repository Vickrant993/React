import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CompA=()=>{
    const [selectedVal, setSelectedVal]= useState(1);
    const [name, setSelectedName]= useState();
    const [moves, setSelectedMoves]= useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedVal}`)
            setSelectedName(res.data.name)
            setSelectedMoves(res.data.moves.length)
        }
        getData();
    })
    const ddlOptions = [
        {value:'1', text:'1'},
        {value:'2', text:'2'},        
        {value:'25', text:'25'},
        {value:'3', text:'3'},
        {value:'4', text:'4'},
        {value:'6', text:'6'}
    ]
    return(
        <React.Fragment>
            <h2>You have selected <span style={{color:"red"}}>{selectedVal}</span></h2><br/>
            <h2>You have selected <span style={{color:"red"}}>{`${name}`}</span></h2><br/>
            <h2>You have selected moves <span style={{color:"red"}}>{`${moves}`}</span></h2><br/>
            <br/><br/>
            <select className="select" onChange={(event)=>{
                setSelectedVal(event.target.value)
            }}>
                {
                    ddlOptions.map((currVal, index)=>{
                    return(<option key={index} value={currVal.value} >{currVal.text}</option>)                        
                    })                    
                }
            </select>
        </React.Fragment>
    )
}

export default CompA;