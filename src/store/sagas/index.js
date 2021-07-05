import { fork, all } from 'redux-saga/effects';
import table from './table'
import users from "../reducers/users";

export default function* watchers() {
  return yield all([
    table,
    users
  ].map(fork))
}
