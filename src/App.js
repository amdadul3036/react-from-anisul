import React from 'react';
import CardName from '../src/Components/Card/card';
import Data from '../src/JSON DATA/data.json';

const APP = "TO DO APP";

function App(){
    return <div>
      <h1 style = {{backgroundColor : "blue" , fontSize: "100px" , textAlign: "center"}}>{APP}</h1>
      <CardName CallCard = {Data[0].title} Dummy = {Data[0].description} Date = "10/01/2021"/>
      <CardName CallCard = {Data[1].title} Dummy = {Data[1].description} Date = "10/02/2021"/>
      <CardName CallCard = {Data[2].title} Dummy = {Data[2].description} Date = "10/03/2021"/>
      <CardName CallCard = {Data[3].title} Dummy = {Data[3].description} Date = "10/04/2021"/>
      <CardName CallCard = {Data[4].title} Dummy = {Data[4].description} Date = "10/05/2021"/>
      <CardName CallCard = {Data[5].title} Dummy = {Data[5].description} Date = "10/06/2021"/>
    </div>
}

export default App;