import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './sample/functional-component/greetings';
import name,{lastName, favColor, myBike} from './sample/functional-component/importExport'
import {add, sub, multiply, divide} from './sample/functional-component/calci';
import Card from './sample/functional-component/card'
import NetflixCard  from './sample/functional-component/netflixProject'
// import ArrayMapComp from './sample/functional-component/arrayMap'
import sampData from './sample/functional-component/mockJson/netflixData';
import EventHandling from './sample/functional-component/HandlingEvents'
// import MyForm from './sample/functional-component/FormBasic'
import MyFormWithSpreadOperator from './sample/functional-component/FormsBasicWithSpreadOperator'
// const cardsArray = sampData.map((data,i)=>{
//   return <NetflixCard key={i} cardTitle={data.cardTitle} cardImg={data.cardImg} cardLinkUrl={data.cardLinkUrl} />
// })
class App extends Component {
  constructor(){
    super();
  }
  render() {
    // const cardsArray = sampData.map((data,i)=>{
    //   return <NetflixCard key={i} cardTitle={sampData[i].cardTitle} cardImg={sampData[i].cardImg} cardLinkUrl={sampData[i].cardLinkUrl} / > 
    // })
    return (
       /* <Greeting/> */
      /* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      // <ol>
      //   <li>{name}</li>
      //   <li>{lastName}</li>
      //   <li>{`fav color is ${favColor()}`}</li>
      //   <li>{`my bike name is ${myBike()}`}</li>
      // </ol>
      // <ul>
      //   <li>sum is {add(4,5)}</li>
      //   <li>sub is {sub(10,7)}</li>
      //   <li>multiply is {multiply(4,5)}</li>
      //   <li>divides is {divide(20,5)}</li>
      // </ul>
      // <Card imgSrc='https://picsum.photos/id/237/200/300' />
      // <React.Fragment>
      //   <h1 style={{margin:'10px auto'}}>Top 5 Cards</h1>
      //   <NetflixCard cardTitle="Sample 1"  cardImg="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" cardLinkUrl="https://picsum.photos/images" />
      //   <NetflixCard cardTitle="Sample 1"  cardImg="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" cardLinkUrl="https://picsum.photos/images" />
      //   <NetflixCard cardTitle="Sample 1"  cardImg="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" cardLinkUrl="https://picsum.photos/images" />
      //   <NetflixCard cardTitle="Sample 1"  cardImg="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" cardLinkUrl="https://picsum.photos/images" />
      //   <div className="clearfix"></div>
      // </React.Fragment>
      // <ArrayMapComp />
      <MyFormWithSpreadOperator />
    );
  }
}

export default App;
