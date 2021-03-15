import React, { Component } from 'react'
import { Table, TableRow, TableCell, Label, TableColumn } from "@ui5/webcomponents-react";

class SalesOrderItemTable extends Component {


    render() {
        return (
            <Table
                className=""
                columns={<><TableColumn demandPopin style={{ width: '12rem' }}>
                    <Label>Item</Label>
                </TableColumn>
                    <TableColumn demandPopin popinText="Description">
                        <Label>Description</Label>
                    </TableColumn><TableColumn demandPopin popinText="Product ID">
                        <Label>Product ID</Label>
                    </TableColumn>
                    <TableColumn demandPopin popinText="Unit of Measure">
                        <Label>Unit of Measure</Label>
                    </TableColumn>
                    <TableColumn demandPopin>
                        <Label>Total</Label>
                    </TableColumn></>}
                onPopinChange={function noRefCheck() { }}
                onRowClick={function noRefCheck() { }}
                slot=""
                style={{}}
                tooltip=""
            >
                {this.props.selectedSalesOrder.item && this.props.selectedSalesOrder.item.length > 0 ?
                    this.props.selectedSalesOrder.item.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <Label>
                                    {item.id}
                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    {item.description.value}
                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    {item.itemProduct.productID.value}
                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    {item.itemProduct.unitOfMeasure}
                                </Label>
                            </TableCell>
                            <TableCell>
                                <Label>
                                    {item.priceAndTaxCalculationItem.itemMainTotal.rate.decimalValue}
                                </Label>
                            </TableCell>
                        </TableRow>)) :
                    <TableRow>
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
                                No items for this order
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
                    </TableRow>}
            </Table>
        )
    }
}


export default SalesOrderItemTable