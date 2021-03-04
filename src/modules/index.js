import {combineReducers} from 'redux'
import SalesOrderReducer from './salesorder'

const rootReducer = combineReducers({
    salesorder: SalesOrderReducer
})

export default rootReducer