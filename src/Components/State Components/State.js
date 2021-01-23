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
        const {count} = this.state
        return(
            <div>
                <h2>Count : {count}</h2>
            </div>
        )
    }
}

export default StateLearning;