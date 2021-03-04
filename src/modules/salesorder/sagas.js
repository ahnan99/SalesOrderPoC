import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

function* getSalesOrderListWatch() {
    yield takeLatest(types.GET_SALES_ORDER_LIST, getSalesOrderListWorker)
}


export function getSalesOrderListEndpoint(data) {
    return axios.post('/querysalesorderin3?sap-vhost=my335778.sapbydesign.com?wsdl', data, {
        withCredentials: true,
        headers:
            { 'Content-Type': 'text/xml' },
        auth: {
            username: 'POCUSER',
            password: 'Welcome1'
        }
    })
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