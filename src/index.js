import React from 'react';
import ReactDOM from 'react-dom';
import CardName from '../src/Components/Card/card';
const APP = "TO DO APP";

ReactDOM.render(

   <div>
      <h1 style = {{backgroundColor : "blue" , fontSize: "100px" , textAlign: "center"}}>{APP}</h1>
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
      <CardName />
   </div>
  ,document.getElementById('root')
);


