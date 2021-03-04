const GET_SALES_ORDER_LIST = 'get_sales_order_list'
const UPDATE_SALES_ORDER_LIST = 'update_sales_order_list'

export const types = {
    GET_SALES_ORDER_LIST,
    UPDATE_SALES_ORDER_LIST
}
const getSalesOrderList = payload => ({
    type: GET_SALES_ORDER_LIST,
    payload
})
const updateSalesOrderList = data => ({
    type: UPDATE_SALES_ORDER_LIST,
    data
});

export const actions = {
    updateSalesOrderList,
    getSalesOrderList
}
const initialState = {
    salesOrderList: null
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
        default:
            return state;
    }
}

export default reducer