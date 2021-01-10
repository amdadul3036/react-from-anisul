// const CALL = "Call Family";
// const Dummy = "Set up time ts is the time interval immidiately preeciding the active transition of the CLK signal during which the clock input must be maintained at the proper lavel "
// const Date = "09/01/2021";

function CardName(props){
    const {CallCard , Dummy , Date} = props;
  return <div className = "FullCard">
      <h1 className = "CallCard">{CallCard}</h1>
      <h3 className = "DummyCard">{Dummy}</h3>
      <h4 className = "DateCard">{Date}</h4>
  </div>
}

export default CardName;