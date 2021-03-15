import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

function* getSalesOrderListWatch() {
    yield takeLatest(types.GET_SALES_ORDER_LIST, getSalesOrderListWorker)
}

function* getSingleSalesOrderWatch() {
    yield takeLatest(types.GET_SINGLE_SALES_ORDER, getSingleSalesOrderWorker)
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

function* getSingleSalesOrderWorker(action) {
    try {
        const response = yield call(getSalesOrderListEndpoint, { ...action.payload, maxHit: 1 })
        yield put(actions.updateSelectedSalesOrder(response.data.value.salesOrder[0]))
    } catch (error) {
        yield put(actions.updateSelectedSalesOrder(error))
    }
}


export const workers = { getSalesOrderListWorker, getSingleSalesOrderWorker }

export default function* saga() {
    yield all([
        getSalesOrderListWatch(),
        getSingleSalesOrderWatch()
    ])
}