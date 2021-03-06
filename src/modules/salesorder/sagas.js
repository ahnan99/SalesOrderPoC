import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

function* getSalesOrderListWatch() {
    yield takeLatest(types.GET_SALES_ORDER_LIST, getSalesOrderListWorker)
}


export function getSalesOrderListEndpoint(data) {
    return axios.get('/SalesOrderByID', { params: data })
}

//workers
function* getSalesOrderListWorker(action) {
    try {
        const response = yield call(getSalesOrderListEndpoint, action.payload)
        yield put(actions.updateSalesOrderList(response.data))
    } catch (error) {
        yield console.log(error)
    }
}


export const workers = { getSalesOrderListWorker }

export default function* saga() {
    yield all([
        getSalesOrderListWatch()
    ])
}