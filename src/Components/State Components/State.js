import React , {Component} from 'react';

class StateLearning extends Component{

    // We Need Constructure for STATE
    constructor(props) {
        super(props)

        this.state = {
                count : 0
        }
    }


    render(){
        return(
            <div>
                <h2>Count : {this.state.count}</h2>
            </div>
        )
    }
}

export default StateLearning;