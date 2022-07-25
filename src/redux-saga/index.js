
import {all} from 'redux-saga/effects';

import {cashWatcher, customerWatcher} from "./watchers/workersWathcer";

export function* rootWatcher() {
    yield all([cashWatcher(), customerWatcher()]);
}