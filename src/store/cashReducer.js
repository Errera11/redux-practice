
const defaultState = {
    cash: 0
}

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';
export const ASYNC_ADD_CASH = 'ASYNC_ADD_CASH';
export const ASYNC_GET_CASH = 'ASYNC_GET_CASH';
export const ASYNC_ADD_CASH1 = 'ASYNC_ADD_CASH1';
export const ASYNC_GET_CASH1 = 'ASYNC_GET_CASH1';
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload};
        case GET_CASH:
            return {...state, cash: state.cash - action.payload};
        case ASYNC_ADD_CASH:
            return {...state, cash: state.cash + 1};
        case ASYNC_GET_CASH:
            return {...state, cash: state.cash - 1};
        default:
            return state;
    }
}

export const asyncAddCash = () => {
    return {type: ASYNC_ADD_CASH};
}

export const asyncGetCash = () => {
    return {type: ASYNC_GET_CASH};
}

export const asyncAddCash1 = () => {
    return {type: ASYNC_ADD_CASH1};
}

export const asyncGetCash1 = () => {
    return {type: ASYNC_GET_CASH1};
}
