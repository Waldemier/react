import React from 'react';
import {connect} from 'react-redux';
import { add2, sub2, asyncAddNumber } from './redux/ActionsCreator/actions'
class Counter2 extends React.Component {
    render(){
        //console.log(this.props)
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter <strong>{this.props.counter2}</strong></h1>

                <hr/>

                <div className="Actions">
                <button onClick={this.props.onAdd}>Add</button>
                <button onClick={this.props.onSubstitute}>Sub</button>
                <button onClick={() => this.props.asyncAddNumber(100)}>Asynchronously add 100</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) { //state have 2 reducers : Counter1Reduce and Counter2Reduce
    return {
        counter2: state.Counter2Reduce.counter2 //тут counter2 це властивість стейта
    }
}

function mapDispatchToProps(dispatch) { //Передає оголошенні властивості у пропси
    return {
        onAdd: () => dispatch(add2()),
        onSubstitute: () => dispatch(sub2()),
        asyncAddNumber: number => dispatch(asyncAddNumber(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)