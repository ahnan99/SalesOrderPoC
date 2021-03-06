import React, { Component } from 'react'
import { Table, TableRow, TableCell, Label, TableColumn } from "@ui5/webcomponents-react";
export default class SalesOrderTable extends Component {

    render() {

        return (
            <Table
                className=""
                columns={<><TableColumn style={{ width: '12rem' }}>
                    <Label>SalesOrder ID</Label>
                </TableColumn>
                    <TableColumn minWidth={800} popinText="Supplier">
                        <Label>Status</Label>
                    </TableColumn><TableColumn demandPopin minWidth={600} popinText="Dimensions">
                        <Label>Ship to Party</Label>
                    </TableColumn>
                    <TableColumn demandPopin minWidth={600} popinText="Weight">
                        <Label>Weight</Label>
                    </TableColumn>
                    <TableColumn>
                        <Label>Price</Label>
                    </TableColumn></>}
                growing="TableGrowingMode.None"
                onLoadMore={function noRefCheck() { }}
                onPopinChange={function noRefCheck() { }}
                onRowClick={function noRefCheck() { }}
                slot=""
                style={{}}
                tooltip=""
            >
                {(this.props.salesorder.salesOrderList) ?
                    this.props.salesorder.salesOrderList.value.salesOrder.map(salesOrder => (
                        <TableRow>
                            <TableCell>
                                <Label>
                                    {salesOrder.id.value}
                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    {salesOrder.status.approvalStatusName.value}
                                    </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    30 x 18 x 3cm
                                    </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    4.2KG
                                     </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    956EUR
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
                                Loading...
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
        )
    }
}


