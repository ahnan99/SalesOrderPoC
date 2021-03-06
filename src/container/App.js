import React, { Component } from 'react'
import routes from '../routes'
import { Route, Switch } from 'react-router-dom'
import { Layout, Avatar } from 'antd';
import axios from 'axios'
import { ShellBar, StandardListItem } from '@ui5/webcomponents-react'
import logo from '../static/sap-logo-svg.svg'
import 'antd/dist/antd.css'
import './App.css'

const { Content, Footer } = Layout;

axios.defaults.baseURL = "http://localhost:8080"
export default class App extends Component {

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

