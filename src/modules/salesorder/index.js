const GET_SALES_ORDER_LIST = 'get_sales_order_list'
const GET_SINGLE_SALES_ORDER = 'get_single_sales_order'
const UPDATE_SALES_ORDER_LIST = 'update_sales_order_list'
const UPDATE_SELECTED_SALES_ORDER = 'update_selected_sales_order'
const UPDATE_ID = 'update_id'
const UPDATE_UPPER_ID = 'update_upper_id'
const UPDATE_DATE_LOWER = 'update_date_lower'
const UPDATE_DATE_UPPER = 'update_date_upper'
const UPDATE_MAXHIT = 'update_max_hit'
const RESET_MAXHIT = 'reset_max_hit'
const UPDATE_DATERANGE = 'update_date_range'

export const types = {
    GET_SALES_ORDER_LIST,
    UPDATE_SALES_ORDER_LIST,
    UPDATE_SELECTED_SALES_ORDER,
    GET_SINGLE_SALES_ORDER,
    UPDATE_ID,
    UPDATE_UPPER_ID,
    UPDATE_DATE_LOWER,
    UPDATE_DATE_UPPER,
    UPDATE_MAXHIT,
    RESET_MAXHIT,
    UPDATE_DATERANGE
}

const orignalHit = 20

const getSalesOrderList = payload => ({
    type: GET_SALES_ORDER_LIST,
    payload
})
const updateSalesOrderList = data => ({
    type: UPDATE_SALES_ORDER_LIST,
    data
});

const updateSelectedSalesOrder = data => ({
    type: UPDATE_SELECTED_SALES_ORDER,
    data
})

const getSingleSalesOrder = payload => ({
    type: GET_SINGLE_SALES_ORDER,
    payload
})

const updateId = data => ({
    type: UPDATE_ID,
    data
})

const updateUpperId = data => ({
    type: UPDATE_UPPER_ID,
    data
})

const updateDateLower = data => ({
    type: UPDATE_DATE_LOWER,
    data
})

const updateDateUpper = data => ({
    type: UPDATE_DATE_UPPER,
    data
})

const updateMaxHit = data => ({
    type: UPDATE_MAXHIT,
    data
})

const resetMaxHit = () => ({
    type: RESET_MAXHIT,
})

const updateDateRange = data => ({
    type: UPDATE_DATERANGE,
    data
})

export const actions = {
    updateSalesOrderList,
    getSalesOrderList,
    updateSelectedSalesOrder,
    getSingleSalesOrder,
    updateId,
    updateUpperId,
    updateDateLower,
    updateDateUpper,
    updateMaxHit,
    resetMaxHit,
    updateDateRange
}

const initialState = {
    salesOrderList: null,
    selectedSalesOrder: null,
    id: null,
    dateTimeLower: null,
    dateTimeUpper: null,
    upperId: null,
    maxHit: orignalHit,
    dateRange: null
}

//Reducers
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_SALES_ORDER_LIST: {
            return {
                ...state,
                salesOrderList: action.data
            }
        }
        case UPDATE_SELECTED_SALES_ORDER: {
            return {
                ...state,
                selectedSalesOrder: action.data
            }
        }
        case UPDATE_ID: {
            return {
                ...state,
                id: action.data
            }
        }
        case UPDATE_UPPER_ID: {
            return {
                ...state,
                upperId: action.data
            }
        }
        case UPDATE_DATE_LOWER: {
            return {
                ...state,
                dateTimeLower: action.data
            }
        }
        case UPDATE_DATE_UPPER: {
            return {
                ...state,
                dateTimeUpper: action.data
            }
        }
        case UPDATE_MAXHIT: {
            return {
                ...state,
                maxHit: action.data
            }
        }
        case RESET_MAXHIT: {
            return {
                ...state,
                maxHit: orignalHit
            }
        }
        case UPDATE_DATERANGE: {
            return {
                ...state,
                dateRange: action.data
            }
        }
        default:
            return state;
    }
}

export default reducer