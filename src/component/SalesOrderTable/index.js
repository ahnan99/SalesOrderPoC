import React, { Component } from 'react'
import { Table, TableRow, TableCell, Label, TableColumn } from "@ui5/webcomponents-react";
import xml from '../../api/salesorder/SalesOrderList.xml'
export default class SalesOrderTable extends Component {

    componentDidMount() {
        this.props.actions.getSalesOrderList(`<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
        xmlns:glob="http://sap.com/xi/SAPGlobal20/Global">
        <soap:Header/>
        <soap:Body>
            <glob:SalesOrderByElementsQuery_sync>
                <!--Optional:-->
                <SalesOrderSelectionByElements>
                    <!--Zero or more repetitions:-->
                    <SelectionByID>
                        <!--Optional:-->
                        <InclusionExclusionCode>I</InclusionExclusionCode>
                        <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>
                        <!--Optional:-->
                        <LowerBoundaryID>2723</LowerBoundaryID>
                        <!--Optional:-->
                        <UpperBoundaryID>2800</UpperBoundaryID>
                    </SelectionByID>
                </glob:SalesOrderByElementsQuery_sync>
            </soap:Body>
        </soap:Envelope>`);
    }

    render() {
        return (
            <Table
                className=""
                columns={<><TableColumn style={{ width: '12rem' }}><Label>Product</Label></TableColumn><TableColumn minWidth={800} popinText="Supplier"><Label>Supplier</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Dimensions"><Label>Dimensions</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Weight"><Label>Weight</Label></TableColumn><TableColumn><Label>Price</Label></TableColumn></>}
                growing="TableGrowingMode.None"
                onLoadMore={function noRefCheck() { }}
                onPopinChange={function noRefCheck() { }}
                onRowClick={function noRefCheck() { }}
                slot=""
                style={{}}
                tooltip=""
            >
                <TableRow>
                    <TableCell>
                        <Label>
                            Notebook Basic
      </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            Very Best Screens
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
                <TableRow>
                    <TableCell>
                        <Label>
                            Notebook Basic 17HT-1001
      </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            Very Best Screens
      </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            29 x 17 x 3.1cm
      </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            4.5KG
      </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            1249EUR
      </Label>
                    </TableCell>
                </TableRow>
            </Table>
        )
    }
}
