import React, { Component } from 'react'
import { ObjectPage, BusyIndicator, Breadcrumbs, Button, FlexBox, ObjectStatus, Link, ObjectPageSection, Form, FormItem, Text, ObjectPageSubSection, FormGroup, Label } from '@ui5/webcomponents-react'
import qs from 'qs'
import { actions as SalesOrderActions } from '../../modules/salesorder'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import SalesOrderItemTable from '../../component/SalesOrderItemTable'

class SalesOrderObjectPage extends Component {

    componentDidMount() {
        if (!this.props.salesorder.selectedSalesOrder) {
            if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).SalesOrderId) {
                this.props.actions.getSingleSalesOrder({ id: qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).SalesOrderId })
            } else {

            }
        }

    }

    render() {
        if (!this.props.salesorder.selectedSalesOrder) {
            return (<BusyIndicator
                active={true}
                style={{ width: "100%" }}
            />)
        }
        const { selectedSalesOrder } = this.props.salesorder
        return (
            <ObjectPage
                breadcrumbs={<Breadcrumbs currentLocationText={selectedSalesOrder.id.value}><Link onClick={() => { this.props.history.push('/SalesOrder') }}>Manage Sales Order</Link></Breadcrumbs>}
                className=""
                headerActions={[
                    <Button key="1" design="Emphasized">Edit</Button>,
                    <Button key="2">Cancel</Button>
                ]}
                headerContent={<>
                    <FlexBox direction="Column"><Label>Status</Label><Label>{selectedSalesOrder.status.itemListCustomerOrderLifeCycleStatusName.value}</Label></FlexBox>
                    <FlexBox direction="Column"><Label>Posting Date</Label><Label>{moment(selectedSalesOrder.postingDate).format('YYYY/MM/DD')}</Label></FlexBox></>}
                headerContentPinnable
                imageShapeCircle
                keyInfos={<ObjectStatus state="Success">Open</ObjectStatus>}
                onSelectedSectionChanged={function noRefCheck() { }}
                selectedSectionId="general"
                showHideHeaderButton
                slot=""
                style={{
                    height: '700px'
                }}
                subTitle="Sales Order"
                title={selectedSalesOrder.id.value}
                tooltip=""
            >
                <ObjectPageSection
                    aria-label="General"
                    id="general"
                    title="General"
                >
                    <Form
                        columnsL={3}
                        columnsM={2}
                        columnsXL={3}
                        labelSpanL={6}
                        labelSpanM={6}
                        labelSpanXL={8}
                    >
                        <FormGroup title="Basic">
                            <FormItem label="Invoicing Blocking">
                                <Text>
                                    {selectedSalesOrder.status.invoicingBlockingStatusName.value}
                                </Text>
                            </FormItem>
                            <FormItem label="General Data Completeness">
                                <Text>
                                    {selectedSalesOrder.status.generalDataCompletenessStatusName.value}
                                </Text>
                            </FormItem>
                        </FormGroup>
                        <FormGroup title="Orgniazation">
                            <FormItem label="Sales Orgnization">
                                <Text>
                                    {selectedSalesOrder.salesAndServiceBusinessArea.salesOrganisationID}
                                </Text>
                            </FormItem>
                            <FormItem label="Distribution Channel">
                                <Text>
                                    {!selectedSalesOrder.salesAndServiceBusinessArea.distributionChannelCode ? "" : selectedSalesOrder.salesAndServiceBusinessArea.distributionChannelCode.value}
                                </Text>
                            </FormItem>
                            <FormItem label="Service Orgnization">
                                <Text>
                                    {!selectedSalesOrder.salesAndServiceBusinessArea.serviceOrganisationID ? "" : selectedSalesOrder.salesAndServiceBusinessArea.serviceOrganisationID.value}
                                </Text>
                            </FormItem>
                        </FormGroup>
                        <FormGroup title="Bill-To Party">
                            <FormItem label="Bill-To Party ID">
                                <Text>
                                    {selectedSalesOrder.billToParty.partyID.value}
                                </Text>
                            </FormItem>
                            <FormItem label="Bill-To Party Name">
                                <Text>
                                    {selectedSalesOrder.billToParty.address.displayName[0].formattedName.value}
                                </Text>
                            </FormItem>
                        </FormGroup>
                    </Form>
                </ObjectPageSection>
                <ObjectPageSection
                    aria-label="Items"
                    id="items"
                    title="Items"
                >
                    <ObjectPageSubSection
                        aria-label="Sales Order Items"
                        id="sales-order-item"
                        title="Sales Order Items"
                    >
                        <SalesOrderItemTable selectedSalesOrder={this.props.salesorder.selectedSalesOrder} />
                    </ObjectPageSubSection>
                </ObjectPageSection>
            </ObjectPage>
        )
    }
}

const mapStateToProps = state => ({
    salesorder: state.salesorder
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SalesOrderActions, dispatch)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SalesOrderObjectPage))