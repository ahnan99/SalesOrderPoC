import React, { Component } from 'react'
import routes from '../routes'
import { Route, Switch } from 'react-router-dom'
import { Layout, Avatar } from 'antd';
import axios from 'axios'
import { actions as SalesOrderActions } from '../modules/salesorder'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ShellBar, StandardListItem, Button } from '@ui5/webcomponents-react'
import "@ui5/webcomponents-icons/dist/nav-back.js"
import logo from '../static/sap-logo-svg.svg'
import 'antd/dist/antd.css'
import './App.css'
import { withRouter } from 'react-router-dom'

const { Content, Footer } = Layout;
const production = process.env.REACT_APP_REMOTE || process.env.NODE_ENV === "production"
axios.defaults.baseURL = production ? "http://116.62.239.140:8080" : "http://localhost:8080"
class App extends Component {

  onBack = () => {
    this.props.actions.updateSelectedSalesOrder(null)
    this.props.history.goBack()
  }

  get routes() {

    return routes.map(route => (
      <Route key={route.pathKey} exact {...route} />
    ))

  }

  render() {
    return (

      <Layout className="layout">
        <ShellBar
          className=""
          logo={<img alt=" " src={logo} />}
          menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item 3</StandardListItem></>}
          notificationCount={10}
          onLogoClick={function noRefCheck() { }}
          onMenuItemClick={function noRefCheck() { }}
          onNotificationsClick={function noRefCheck() { }}
          onProductSwitchClick={function noRefCheck() { }}
          onProfileClick={function noRefCheck() { }}
          primaryTitle="Manage Sales Order"
          profile={<Avatar>U</Avatar>}
          showNotifications
          showProductSwitch
          startButton={this.props.salesorder.selectedSalesOrder ? <Button
            className=""
            design="Transparent"
            onClick={() => this.onBack()}
            icon="nav-back"
            slot=""
            style={{}}
            tooltip=""
          /> : null}
          slot=""
          style={{}}
          tooltip=""
        />
        <Content style={{ padding: '25px 25px' }}>
          <div className="site-layout-content">  <Switch>
            {this.routes}
          </Switch></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Sales Order Test</Footer>
      </Layout>

    )
  }
}


const mapStateToProps = state => ({
  salesorder: state.salesorder
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(SalesOrderActions, dispatch)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

