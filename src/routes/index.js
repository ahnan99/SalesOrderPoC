import SalesOrderObjectPage from '../container/SalesOrderObjectPage'
import SalesOrderPage from '../container/SalesOrderPage'

const routes = [{
    path: '/SalesOrder',
    pathKey: 'SalesOrder',
    component: SalesOrderPage
},
{
    path: '/SalesOrderDetail',
    pathKey: 'SalesOrderDetail',
    component: SalesOrderObjectPage
}]

export default routes