import React from 'react';
import CardName from '../src/Components/Card/card';
import Data from '../src/JSON DATA/data.json';
import Card2 from './Components/Class Components/ClassComponents';

const APP = "TO DO APP";

function App(){

  // let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(<CardName CallCard = {Data[x].title} Dummy = {Data[x].description} Date = "10/01/2021"/>) 
  // }  //In General we do not use for loop ; we use map

  // items = Data.map((item) => <CardName CallCard = { item.title } Dummy = {item.description} Date = {item.Date}/> )
    
    return <div>
      <h1 style = {{backgroundColor : "blue" , fontSize: "100px" , textAlign: "center"}}>{APP}</h1>
      {Data.map((item) => <CardName CallCard = { item.title } Dummy = {item.description} Date = {item.Date}/> )}
      <Card2 title = "CARD 2 IS HERE"></Card2>
    </div>
}

export default App;