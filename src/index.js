/*

  components in ReactJS

*/

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App.js';
import Heading from './sample/functional-component/Heading';
import Lisitng from './sample/functional-component/lisitng';
import SlotMachGame from './sample/functional-component/slotMachineGame';
import SampleHooks from './sample/functional-component/hooksReact'

// ReactDom.render(
//   <React.Fragment>
//       <h1>Hello</h1>
//   </React.Fragment>,
//   document.getElementById('root')
// );
ReactDom.render(<App />,
  document.getElementById('root')
);






/* 

  picture Gallery with inline css e.g 

  */

// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200";
// const img3 = "https://picsum.photos/250/300";
// const userName = "Vickrant Chhetri";

// const heading={
//   color: '#f09191',
//   display: 'flex',
//   justifyContent: 'center',
//   fontFamily: "'Josefin Sans', sans-serif"
// }
// ReactDom.render(
// <React.Fragment>
// <h1 style={heading}>{`Hello ${userName}`}</h1>
// <div className="imgsDiv">
//   <img src={img1} alt="" />
//   <img src={img2} alt="" />
//   <img src={img3} alt="" />
// </div>
// </React.Fragment>,
// document.getElementById('root')
// );
















/* 
  
  Hello world with dynamic condition text and color e.g 
  
*/

// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';




// ReactDom.render(
//   <React.Fragment>
//   <div style={headerStyle}>
//     <h1>Hello world,  <span style={greetStyle}>{`${greeting}`}</span></h1>
//   </div>
//   </React.Fragment>,
//   document.getElementById('root')
// )