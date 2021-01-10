import React from 'react';
import CardName from '../src/Components/Card/card';

const APP = "TO DO APP";

function App(){
    return <div>
      <h1 style = {{backgroundColor : "blue" , fontSize: "100px" , textAlign: "center"}}>{APP}</h1>
      <CardName CallCard = "This is CallCard 1" Dummy = "This is Dummy Text 1" Date = "10/01/2021"/>
      <CardName CallCard = "This is CallCard 1" Dummy = "This is Dummy Text 2" Date = "10/02/2021"/>
      <CardName CallCard = "This is CallCard 1" Dummy = "This is Dummy Text 3" Date = "10/03/2021"/>
      <CardName CallCard = "This is CallCard 1" Dummy = "This is Dummy Text 4" Date = "10/04/2021"/>
      <CardName CallCard = "This is CallCard 1" Dummy = "This is Dummy Text 5" Date = "10/05/2021"/>
    </div>
}

export default App;