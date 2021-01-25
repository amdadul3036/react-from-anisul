import React , {Component} from 'react';

class StateLearning extends Component{

    // We Need Constructure for STATE
    constructor(props) {
        super(props)

        this.state = {
                count : 0
        }
    }

        handleIncrement = () => {
            this.setState({
                count : this.state.count + 1
            })
        }

        handleDecrement = () => {
            this.setState({
                count : this.state.count - 1
            })
        }

    render(){
        const {count} = this.state
        return(
            <div>
                <h1 style= {{height:"50px",width:"200px",backgroundColor:"#22a4bc",marginLeft:"10px",paddingLeft:"10px"}}>Count : {count}</h1>
                <button onClick = {this.handleIncrement} style = {{height:"60px",width:"60px",marginTop:"10px",marginLeft:"10px",marginRight:"60px"}}>+</button>
                <button onClick = {this.handleDecrement} style = {{height:"60px",width:"60px"}}>-</button>
            </div>
        )
    }
}

export default StateLearning;