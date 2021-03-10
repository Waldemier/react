import {ADD, SUB, NUMBER, ADD2, SUB2, NUMBER2} from './actionTypes'


export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function numberAdd(number) {
    return {
        type: NUMBER,
        payload: number 
    }
}

export function add2() {
    return {
        type: ADD2
    }
}

export function sub2() {
    return {
        type: SUB2
    }
}

export function numberAdd2(number) {
    return {
        type: NUMBER2,
        payload: number 
    }
}

export function asyncAddNumber(number) { //Реалізація асинхронного action'а
    return (dispatch) => {
        setTimeout(() => dispatch(numberAdd2(number)), 3000);
    }
}