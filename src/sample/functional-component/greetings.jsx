import React from 'react';

let greeting = 'Good morning';
const headerStyle={
  color: '#f09191',
  width: '450px',
  margin: '8em auto',
  textAlign: 'center',
  padding:'4px',
  fontFamily: "'Josefin Sans', sans-serif",
  borderRadius: '40px 8px',
  background: '#FFF'
}
const greetStyle={ }
const currTime = new Date(2020,7,8,3);
currTime = currTime.getHours();


if(currTime >= 1 && currTime < 12){
  greeting = 'Good morning';
  greetStyle.color = 'green';
}else if(currTime >= 12 && currTime < 19){
  greeting = 'Good afternoon';
  greetStyle.color = 'orange';
}else{
  greeting = 'Good night';
  greetStyle.color = 'black';
}

const Greeting = ()=>{
    return (
    <div style={headerStyle}>
        <h1>Hello world,  <span style={greetStyle}>{`${greeting}`}</span></h1>
    </div>
    )
}

export default Greeting;