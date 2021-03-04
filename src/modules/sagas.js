import { all, fork } from 'redux-saga/effects'
import salesOrderSaga from './salesorder/sagas'

const sagas = [
    salesOrderSaga
]

function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)))
}

export default rootSaga;