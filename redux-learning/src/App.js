import React, {Component} from 'react'
import './App.scss'
import {connect} from 'react-redux'
import Counter2 from './Counter2'
class App extends Component {

  render() {
    console.info(this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={() => this.props.onNumber(7)}>Добавить 7</button>
        </div>

        <Counter2 />

      </div>

      

    )
  }
}

function mapStateToProps(state) {
  //console.log(state)
  return { 
    counter: state.Counter1Reduce.counter
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onNumber: number => dispatch({type: 'NUMBER', payload: number})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
