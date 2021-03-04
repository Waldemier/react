import React from 'react';
import {connect} from 'react-redux';

class Counter2 extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter <strong>{this.props.counter2}</strong></h1>

                <hr/>

                <div className="Actions">
                <button onClick={this.props.onAdd}>Add</button>
                <button onClick={this.props.onSubstitute}>Sub</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) { //state have 2 reducers : Counter1Reduce and Counter2Reduce
    return {
        counter2: state.Counter2Reduce.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD2'}),
        onSubstitute: () => dispatch({type: 'SUB2'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)