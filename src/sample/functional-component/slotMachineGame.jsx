import React, { Component } from 'react';
const arr =['Vicky', 'Vickrant', 'Chhetri'];
let [a1,,a3]=arr
class SlotMachGame extends Component {
    
    render() {
        return (
            <React.Fragment>
            <h1 className="heading"><span style={{ fontWeight: 'bold' }}>:slot</span> Welcome To Slot Machine Game <span>:slot</span></h1>
            <span>{`Hi ${a1}. Howz You ${a3}`}</span>
            </React.Fragment>
        )
    }
}

export default SlotMachGame;