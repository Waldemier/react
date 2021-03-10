import {ADD2, SUB2, NUMBER2} from '../ActionsCreator/actionTypes'

const initialState = {
    counter2: 0
}

export default function counter2(state = initialState, action) {

    //console.log("counter2: ", "state: ", state, " action: ", action)
    switch(action.type) {
        case ADD2:
            return { // new state
                counter2: state.counter2 + 1
            }
        case SUB2:
            return { 
                counter2: state.counter2 - 1
            }
        case NUMBER2:
            return {
                counter2: state.counter2 + action.payload
            }
        default:
            return state
    }
}