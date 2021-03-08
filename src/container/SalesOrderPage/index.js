import React, { Component } from 'react'
import SalesOrderTable from '../../component/SalesOrderTable'
import { actions as SalesOrderActions } from '../../modules/salesorder'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FilterBar, Input, VariantManagement, FilterGroupItem, DateRangePicker } from '@ui5/webcomponents-react'
import { Space } from 'antd'
import moment from 'moment'
class SalesOrderPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            dateTimeLower: null,
            dateTimeUpper: null
        }
    }

    componentDidMount() {
        this.props.actions.updateSalesOrderList(null)
        this.props.actions.getSalesOrderList({ id: this.state.id, dateTimeLower: moment().subtract(7, 'days').format(), dateTimeUpper: moment().format() });
    }

    onClickEnter = event => {
        this.setState({ id: event.target.value === "" ? null : event.target.value }, () => {
            if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
                this.componentDidMount()
            } else {
                this.props.actions.updateSalesOrderList(null)
                this.props.actions.getSalesOrderList({ id: this.state.id, dateTimeLower: this.state.dateTimeLower, dateTimeUpper: this.state.dateTimeUpper });
            }

        })

    }

    onDateChange = event => {
        this.setState({
            dateTimeLower: event.target.value === "" ? null : moment(event.target.value.split(' - ')[0]).format(),
            dateTimeUpper: event.target.value === "" ? null : moment(event.target.value.split(' - ')[1]).format()
        },
            () => {
                if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
                    this.componentDidMount()
                } else {
                    this.props.actions.updateSalesOrderList(null)
                    this.props.actions.getSalesOrderList({ id: this.state.id, dateTimeLower: this.state.dateTimeLower, dateTimeUpper: this.state.dateTimeUpper });
                }
            });
    }

    onFiltersDialogSearch = event => {
        console.log(event)
    }

    render() {
        return (
            <Space direction="vertical" style={{ width: '100%' }}>
                <FilterBar
                    className=""
                    filterContainerWidth="13.125rem"
                    onClear={function noRefCheck() { }}
                    onFiltersDialogCancel={function noRefCheck() { }}
                    onFiltersDialogClear={function noRefCheck() { }}
                    onFiltersDialogClose={function noRefCheck() { }}
                    onFiltersDialogOpen={function noRefCheck() { }}
                    onFiltersDialogSave={function noRefCheck() { }}
                    onFiltersDialogSearch={this.onFiltersDialogSearch}
                    onFiltersDialogSelectionChange={function noRefCheck() { }}
                    onGo={function noRefCheck() { }}
                    onRestore={function noRefCheck() { }}
                    onToggleFilters={function noRefCheck() { }}
                    search={<Input placeholder="Search" onSubmit={this.onClickEnter} />}
                    showFilterConfiguration
                    slot=""
                    style={{}}
                    tooltip=""
                    variants={<VariantManagement selectedKey="2" variantItems={[{ key: '1', label: 'Variant 1' }, { key: '2', label: 'Variant 2' }]} />}
                >
                    <FilterGroupItem label="Sales Order ID">
                        <Input placeholder="ID" onSubmit={this.onClickEnter} />
                    </FilterGroupItem>
                    <FilterGroupItem
                        groupName="Group 2"
                        label="Posting Date"
                    >
                        <DateRangePicker formatPattern="YYYY/MM/dd"
                            onChange={this.onDateChange} />
                    </FilterGroupItem>
                </FilterBar>
                <div> </div>
                <SalesOrderTable salesorder={this.props.salesorder} actions={this.props.actions} />
            </Space>
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
