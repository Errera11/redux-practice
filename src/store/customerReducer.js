
const defaultState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const ASYNC_ADD_CUSTOMER = 'ASYNC_ADD_CUSTOMER';
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]};
        case ADD_MANY_CUSTOMER:
            return {...state, customers: [...state.customers, ...action.payload]};
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(c => c.id !== action.payload)};
        default:
            return state;
    }
}

export const addCustomerAction = payload => {
    return {type: ADD_CUSTOMER, payload};
}

export const removeCustomerAction = payload => {
    return {type: REMOVE_CUSTOMER, payload};
}

export const addManyCustomerAction = payload => {
    return {type: ADD_MANY_CUSTOMER, payload};
}

export const asyncCustomerAction = payload => {
    return {type: ASYNC_ADD_CUSTOMER};
}