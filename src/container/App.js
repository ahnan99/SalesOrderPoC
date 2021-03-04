import React, { Component } from 'react'
import routes from '../routes'
import { Route, withRouter, Switch } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL = "https://my335778.sapbydesign.com/sap/bc/srt/scs/sap"
export default class App extends Component {

  get routes() {
    return (
      routes.map(route => (
        <Route key={route.pathKey} exact {...route} />
      ))
    )
  }

  render() {
    return (
      <Switch>
        {this.routes}
      </Switch>
    )
  }
}

