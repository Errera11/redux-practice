import {asyncAddCash, asyncGetCash} from "../../store/cashReducer";
import {put} from 'redux-saga/effects';
import {addCustomerAction} from "../../store/customerReducer";
import {call} from 'redux-saga/effects';

const delay = ms => new Promise( (res) => setTimeout(res, ms));

export function* incrementFunction() {
    yield delay(2000);
    yield put(asyncAddCash())
}

export function* decrementFunction() {
    yield delay(2000);
    yield put(asyncGetCash())
}

export function* fetchUsers() {
    const data = yield call(() => fetch('https://jsonplaceholder.typicode.com/users?_limit=3'));
    const json = yield call( () => new Promise(res => res(data.json())));
    yield put(addCustomerAction(json));
}