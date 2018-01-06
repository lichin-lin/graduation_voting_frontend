import React, { Component } from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history, store } from './history'

import Containers from './containers'

export default class Root extends Component {
  render () {
    let match = process.env.NODE_ENV === 'production' ? 'graduation_voting_frontend/' : ''
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path={match} component={Containers.App}/>
        </ConnectedRouter>
      </Provider>
    )
  }
}
