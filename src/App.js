import React from 'react';
import CardName from '../src/Components/Card/card';
import Data from '../src/JSON DATA/data.json';

const APP = "TO DO APP";

function App(){

  let items = [];
  for (let x = 0; x < Data.length; x++) {
    items.push(<CardName CallCard = {Data[x].title} Dummy = {Data[x].description} Date = "10/01/2021"/>) 
  }
    return <div>
      <h1 style = {{backgroundColor : "blue" , fontSize: "100px" , textAlign: "center"}}>{APP}</h1>
      {items}
    </div>
}

export default App;