import 'babel-polyfill'
import { connect } from 'react-redux'
import Actions from 'js/actions'
import Containers from 'containers'
import colors from 'js/style/colors.js'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'
import 'js/style/global.js'

const StyleRoot = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background: ${colors.bg_blue};

  overflow:hidden;
`

const Section = styled.div`
  flex: 1;
  display: flex;
`

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  setScreenWidth: () => dispatch(Actions.Utils.setScreenWidth())
})

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  updateDimensions = () => {
  }
  componentWillMount () {
    this.updateDimensions()
  }
  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }
  render () {
    // let match = this.props.match.url
    let match = process.env.NODE_ENV !== 'production' ? this.props.match.url : ''

    return (
      <StyleRoot>
        {/* <Containers.ui.Header /> */}
        <Section>
          <Switch>
            <Route path={`${match}/about`} component={Containers.about.List} />
            <Route path="/" component={Containers.home.Main} />
          </Switch>
        </Section>
        {/* <Containers.ui.Footer /> */}
        { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
      </StyleRoot>
    )
  }
}