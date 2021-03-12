import React, { Component } from 'react'
import { Table, TableRow, TableCell, Label, TableColumn, BusyIndicator } from "@ui5/webcomponents-react";
import moment from 'moment'
export default class SalesOrderTable extends Component {

    render() {
        return (
            <BusyIndicator
                active={this.props.busy}
                style={{ width: "100%" }}
            >
                <Table
                    className=""
                    columns={<><TableColumn demandPopin style={{ width: '12rem' }}>
                        <Label>SalesOrder ID</Label>
                    </TableColumn>
                        <TableColumn demandPopin popinText="Status">
                            <Label>Status</Label>
                        </TableColumn><TableColumn demandPopin popinText="Account">
                            <Label>Account</Label>
                        </TableColumn>
                        <TableColumn demandPopin popinText="Weight">
                            <Label>Sales Orgnization</Label>
                        </TableColumn>
                        <TableColumn demandPopin>
                            <Label>Posting Date</Label>
                        </TableColumn>
                        <TableColumn demandPopin>
                            <Label>Requested Date</Label>
                        </TableColumn>
                        <TableColumn demandPopin>
                            <Label>External Reference</Label>
                        </TableColumn></>}
                    growing={this.props.salesorder.salesOrderList ? (this.props.salesorder.salesOrderList.value.processingConditions.moreHitsAvailableIndicator ? "Button" : "TableGrowingMode.None") : "TableGrowingMode.None"}
                    onLoadMore={this.props.onLoadMore}
                    onPopinChange={function noRefCheck() { }}
                    onRowClick={function noRefCheck() { }}
                    slot=""
                    style={{}}
                    tooltip=""
                >
                    {this.props.salesorder.salesOrderList ? (this.props.salesorder.salesOrderList.value.salesOrder.length > 0 ?
                        this.props.salesorder.salesOrderList.value.salesOrder.map(salesOrder => (
                            <TableRow key={salesOrder.id.value}>
                                <TableCell>
                                    <Label>
                                        {salesOrder.id.value}
                                    </Label>
                                </TableCell>
                                <TableCell>
                                    <Label>
                                        {salesOrder.status.itemListCustomerOrderLifeCycleStatusName.value}
                                    </Label>
                                </TableCell>
                                <TableCell>
                                    <Label>
                                        {salesOrder.accountParty.address.displayName[0].formattedName.value}
                                    </Label>
                                </TableCell>
                                <TableCell>
                                    <Label>
                                        {salesOrder.salesUnitParty.address.displayName[0].formattedName.value}
                                    </Label>
                                </TableCell>
                                <TableCell>
                                    <Label>
                                        {moment(salesOrder.postingDate).format('YYYY/MM/DD')}
                                    </Label>
                                </TableCell>
                                <TableCell>
                                    <Label>
                                        {moment(salesOrder.requestedFulfillmentPeriodPeriodTerms.startDateTime.value).format('YYYY/MM/DD')}
                                    </Label>
                                </TableCell>
                                <TableCell>
                                    <Label>
                                        {salesOrder.buyerID ? salesOrder.buyerID.value : null}
                                    </Label>
                                </TableCell>
                            </TableRow>
                        )) : <TableRow>
                            <TableCell>
                                <Label>

                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>

                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>

                                </Label>
                            </TableCell>
                            <TableCell style={{ textAlign: 'center' }}>
                                <Label>
                                    No value for selected filter
                            </Label>
                            </TableCell>
                            <TableCell>
                                <Label>

                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>

                                </Label>
                            </TableCell>
                        </TableRow>) : <TableRow>
                        <TableCell>
                            <Label>

                            </Label>
                        </TableCell>
                        <TableCell>
                            <Label>

                            </Label>
                        </TableCell>
                        <TableCell>
                            <Label>

                            </Label>
                        </TableCell>
                        <TableCell>
                            <Label>

                            </Label>
                        </TableCell>
                        <TableCell>
                            <Label>

                            </Label>
                        </TableCell>
                        <TableCell>
                            <Label>

                            </Label>
                        </TableCell>
                    </TableRow>

                    }
                </Table>
            </BusyIndicator >
        )
    }
}


