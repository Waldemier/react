import {ADD, SUB, NUMBER} from '../ActionsCreator/actionTypes'

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action) {

    switch(action.type) {
        case ADD:
            return { // new state
                counter: state.counter + 1
            }
        case SUB:
            return { 
                counter: state.counter - 1
            }
        case NUMBER:
            return { 
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}