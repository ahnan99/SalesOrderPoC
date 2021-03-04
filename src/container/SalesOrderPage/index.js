import React, { Component } from 'react'
import SalesOrderTable from '../../component/SalesOrderTable'
import { actions as SalesOrderActions } from '../../modules/salesorder'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SalesOrderPage extends Component {
    render() {
        return (
            <div>
                <SalesOrderTable salesorder={this.props.salesorder} actions={this.props.actions} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    salesorder: state.salesorder
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SalesOrderActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SalesOrderPage)
