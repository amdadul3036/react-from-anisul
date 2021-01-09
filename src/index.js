import React from 'react';
import ReactDOM from 'react-dom';

const APP = "TO DO APP";
const CALL = "Call Family";
const Dummy = "Set up time ts is the time interval immidiately preeciding the active transition of the CLK signal during which the clock input must be maintained at the proper lavel "
const Date = "09/01/2021";


ReactDOM.render(

   <div>
    <h1 style = {{backgroundColor : "blue" , fontSize: "100px" , textAlign: "center"}}>{APP}</h1>
      <div className = "FullCard">
          <h1 className = "CallCard">{CALL}</h1>
          <h3 className = "DummyCard">{Dummy}</h3>
          <h4 className = "DateCard">{Date}</h4>
      </div>
   </div>
  ,document.getElementById('root')
);


