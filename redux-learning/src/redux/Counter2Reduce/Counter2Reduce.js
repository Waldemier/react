const initialState = {
    counter2: 0
}

export default function counter2(state = initialState, action) {

    switch(action.type) {
        case 'ADD2':
            return { // new state
                counter2: state.counter2 + 1
            }
        case 'SUB2':
            return { 
                counter2: state.counter2 - 1
            }
        default:
            return state
    }
}