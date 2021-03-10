import React, { Component } from 'react'
import SalesOrderTable from '../../component/SalesOrderTable'
import { actions as SalesOrderActions } from '../../modules/salesorder'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FilterBar, Input, VariantManagement, FilterGroupItem, DateRangePicker } from '@ui5/webcomponents-react'
import { Space } from 'antd'
import moment from 'moment'

const orignalHit = 20
class SalesOrderPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            dateTimeLower: null,
            dateTimeUpper: null,
            maxHit: orignalHit,
            upperId: null,
            busy: false
        }
    }

    getEmptyCase() {
        this.setState({ busy: true })
        this.props.actions.getSalesOrderList({ id: this.state.id, dateTimeLower: moment().subtract(14, 'days').format(), dateTimeUpper: moment().format(), maxHit: this.state.maxHit });
    }

    componentDidMount() {
        this.props.actions.updateSalesOrderList(null)
        this.getEmptyCase()
    }

    onClickEnter = event => {
        this.setState({ id: event.target.value === "" ? null : event.target.value, maxHit: orignalHit }, () => {
            if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
                this.getEmptyCase()
            } else {
                this.refresh()
            }
        })
    }

    onClickUpperEnter = event => {
        this.setState({ upperId: event.target.value === "" ? null : event.target.value, maxHit: orignalHit }, () => {
            if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
                this.getEmptyCase()
            } else {
                this.refresh()
            }
        })
    }

    onIdChange = event => {
        this.setState({ id: event.target.value === "" ? null : event.target.value })
    }

    onUpperIdChange = event => {
        this.setState({ upperId: event.target.value === "" ? null : event.target.value })
    }

    refresh() {
        this.setState({ busy: true })
        this.props.actions.getSalesOrderList({ id: this.state.id, dateTimeLower: this.state.dateTimeLower, dateTimeUpper: this.state.dateTimeUpper, upperId: this.state.upperId, maxHit: this.state.maxHit });
    }

    onDateChange = event => {
        this.setState({
            dateTimeLower: event.target.value === "" ? null : moment(event.target.value.split(' - ')[0]).format(),
            dateTimeUpper: event.target.value === "" ? null : moment(event.target.value.split(' - ')[1]).format(),
            maxHit: orignalHit
        },
            () => {
                if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
                    this.getEmptyCase()
                } else {
                    this.refresh()
                }
            });
    }

    onFiltersDialogSearch = event => {
        console.log(event)
    }

    onGo = event => {
        this.setState({ maxHit: orignalHit })
        if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
            this.getEmptyCase()
        } else {
            this.refresh()
        }
    }

    onLoadMore = event => {
        this.setState({ maxHit: this.state.maxHit + 10 })
        if (!this.state.id && !this.state.dateTimeLower && !this.state.dateTimeUpper) {
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
                        <Input placeholder="ID" onSubmit={this.onClickEnter} onChange={this.onIdChange} />
                    </FilterGroupItem>
                    <FilterGroupItem label="Sales Order ID Upper Boundary">
                        <Input placeholder="Upper ID" onSubmit={this.onClickUpperEnter} onChange={this.onUpperIdChange} />
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
