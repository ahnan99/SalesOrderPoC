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
            busy: false
        }
        this.idInput = React.createRef();
        this.upperIdInput = React.createRef();
        this.dateRangeInput = this.switch = React.createRef();
    }

    getEmptyCase() {
        this.setState({ busy: true })
        this.props.actions.getSalesOrderList({ id: this.props.salesorder.id, dateTimeLower: moment().subtract(14, 'days').format(), dateTimeUpper: moment().format(), maxHit: this.props.salesorder.maxHit });
    }

    componentDidMount() {
        if (!this.props.salesorder.salesOrderList) {
            this.getEmptyCase()
        }
    }

    onClickEnter = event => {
        this.props.actions.updateId(event.target.value === "" ? null : event.target.value)
        this.props.actions.resetMaxHit()
        if (!this.props.salesorder.id && !this.props.salesorder.upperId && !this.props.salesorder.dateTimeLower && !this.props.salesorder.dateTimeUpper) {
            this.getEmptyCase()
        } else {
            this.refresh()
        }

    }

    onClickUpperEnter = event => {
        this.props.actions.updateUpperId(event.target.value === "" ? null : event.target.value)
        this.props.actions.resetMaxHit()
        if (!this.props.salesorder.id && !this.props.salesorder.upperId && !this.props.salesorder.dateTimeLower && !this.props.salesorder.dateTimeUpper) {
            this.getEmptyCase()
        } else {
            this.refresh()
        }
    }


    onIdChange = event => {
        this.props.actions.updateId(event.target.value === "" ? null : event.target.value)
    }

    onUpperIdChange = event => {
        this.props.actions.updateUpperId(event.target.value === "" ? null : event.target.value)
    }

    refresh() {
        this.setState({ busy: true })
        if (this.props.salesorder.upperId && (!this.props.salesorder.id || this.props.salesorder.id === '')) {
            this.props.actions.getSalesOrderList({ id: this.props.salesorder.upperId, dateTimeLower: this.props.salesorder.dateTimeLower, dateTimeUpper: this.props.salesorder.dateTimeUpper, upperId: this.props.salesorder.upperId, maxHit: this.props.salesorder.maxHit });
        } else {
            this.props.actions.getSalesOrderList({ id: this.props.salesorder.id, dateTimeLower: this.props.salesorder.dateTimeLower, dateTimeUpper: this.props.salesorder.dateTimeUpper, upperId: this.props.salesorder.upperId, maxHit: this.props.salesorder.maxHit });
        }
    }

    onDateChange = event => {
        this.props.actions.updateDateLower(event.target.value === "" ? null : moment(event.target.value.split(' - ')[0]).format())
        this.props.actions.updateDateUpper(event.target.value === "" ? null : moment(event.target.value.split(' - ')[1]).format())
        this.props.actions.updateDateRange(event.target.value === "" ? null : event.target.value)
        this.props.actions.resetMaxHit()
        if (!this.props.salesorder.id && !this.props.salesorder.upperId && !this.props.salesorder.dateTimeLower && !this.props.salesorder.dateTimeUpper) {
            this.getEmptyCase()
        } else {
            this.refresh()
        }

    }

    onFiltersDialogSearch = event => {
        console.log(event)
    }

    onGo = event => {
        this.props.actions.resetMaxHit()
        if (!this.props.salesorder.id && !this.props.salesorder.upperId && !this.props.salesorder.dateTimeLower && !this.props.salesorder.dateTimeUpper) {
            this.getEmptyCase()
        } else {
            this.refresh()
        }
    }

    onLoadMore = event => {
        this.props.actions.updateMaxHit(this.props.salesorder.maxHit + 10)
        if (!this.props.salesorder.id && !this.props.salesorder.upperId && !this.props.salesorder.dateTimeLower && !this.props.salesorder.dateTimeUpper) {
            this.componentDidMount()
        } else {
            this.refresh()
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.salesorder.salesOrderList !== this.props.salesorder.salesOrderList) {
            this.setState({ busy: false })
        }
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
                    onGo={this.onGo}
                    onRestore={function noRefCheck() { }}
                    onToggleFilters={function noRefCheck() { }}
                    showFilterConfiguration
                    showGo
                    showGoOnFB
                    slot=""
                    style={{}}
                    tooltip=""
                    variants={<VariantManagement selectedKey="2" variantItems={[{ key: '1', label: 'Variant 1' }, { key: '2', label: 'Variant 2' }]} />}
                >
                    <FilterGroupItem label="Sales Order ID">
                        <Input value={this.props.salesorder.id} placeholder="ID" onSubmit={this.onClickEnter} onChange={this.onIdChange} />
                    </FilterGroupItem>
                    <FilterGroupItem label="Sales Order ID Upper Boundary">
                        <Input value={this.props.salesorder.upperId} placeholder="Upper ID" onSubmit={this.onClickUpperEnter} onChange={this.onUpperIdChange} />
                    </FilterGroupItem>
                    <FilterGroupItem
                        groupName="Group 2"
                        label="Posting Date"
                    >
                        <DateRangePicker
                            formatPattern="YYYY/MM/dd"
                            onChange={this.onDateChange}
                            value={this.props.salesorder.dateRange} />
                    </FilterGroupItem>
                </FilterBar>
                <div> </div>
                <SalesOrderTable salesorder={this.props.salesorder} actions={this.props.actions} onLoadMore={this.onLoadMore} busy={this.state.busy} />
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
