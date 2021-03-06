import React, { Component } from 'react'
import SalesOrderTable from '../../component/SalesOrderTable'
import { actions as SalesOrderActions } from '../../modules/salesorder'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FilterBar, Input, VariantManagement, FilterGroupItem, Select, Option, MultiComboBox, MultiComboBoxItem, DatePicker } from '@ui5/webcomponents-react'
import { Space } from 'antd'
class SalesOrderPage extends Component {


    componentDidMount() {
        this.props.actions.getSalesOrderList({ id: "2713" });
        console.log(this.props.salesorder)
    }

    onClickEnter = event => {
        this.props.actions.updateSalesOrderList(null)
        this.props.actions.getSalesOrderList({ id: event.target.value });
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
                    onFiltersDialogSearch={function noRefCheck() { }}
                    onFiltersDialogSelectionChange={function noRefCheck() { }}
                    onGo={function noRefCheck() { }}
                    onRestore={function noRefCheck() { }}
                    onToggleFilters={function noRefCheck() { }}
                    search={<Input placeholder="Search" />}
                    showFilterConfiguration
                    slot=""
                    style={{}}
                    tooltip=""
                    variants={<VariantManagement selectedKey="2" variantItems={[{ key: '1', label: 'Variant 1' }, { key: '2', label: 'Variant 2' }]} />}
                >
                    <FilterGroupItem label="Sales Order ID">
                        <Input placeholder="Placeholder" onSubmit={this.onClickEnter} />
                    </FilterGroupItem>
                    <FilterGroupItem label="SELECT w/ initial selected">
                        <Select>
                            <Option>
                                Option 1
                            </Option>
                            <Option selected>
                                Option 2
                            </Option>
                            <Option>
                                Option 3
                            </Option>
                            <Option>
                                Option 4
                        </Option>
                        </Select>
                    </FilterGroupItem>
                    <FilterGroupItem label="SELECT w/o initial selected">
                        <Select>
                            <Option
                                data-key="Test 1"
                                icon="add"
                                selected
                            >
                                Test 1
                            </Option>
                            <Option
                                data-key="Test 2"
                                icon="add"
                            >
                                Test 2
                            </Option>
                            <Option
                                data-key="Test 3"
                                icon="add"
                            >
                                Test 3
                            </Option>
                            <Option
                                data-key="Test 4"
                                icon="add"
                            >
                                Test 4
                            </Option>
                            <Option
                                data-key="Test 5"
                                icon="add"
                            >
                                Test 5
                            </Option>
                        </Select>
                    </FilterGroupItem>
                    <FilterGroupItem
                        groupName="Group 1"
                        label="MultBox w/ initial selected"
                    >
                        <MultiComboBox>
                            <MultiComboBoxItem text="MultiComboBoxItem 1" />
                            <MultiComboBoxItem
                                selected
                                text="MultiComboBoxItem 2"
                            />
                            <MultiComboBoxItem text="MultiComboBoxItem 3" />
                            <MultiComboBoxItem
                                selected
                                text="MultiComboBoxItem 4"
                            />
                        </MultiComboBox>
                    </FilterGroupItem>
                    <FilterGroupItem
                        groupName="Group 2"
                        label="MultBox w/o initial selected"
                    >
                        <MultiComboBox>
                            <MultiComboBoxItem text="MultiComboBoxItem 1" />
                            <MultiComboBoxItem text="MultiComboBoxItem 2" />
                            <MultiComboBoxItem text="MultiComboBoxItem 3" />
                            <MultiComboBoxItem text="MultiComboBoxItem 4" />
                        </MultiComboBox>
                    </FilterGroupItem>
                    <FilterGroupItem
                        groupName="Group 2"
                        label="Date Picker"
                    >
                        <DatePicker />
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
