import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Utils from './Utils'

export default combineReducers({
  routing,
  Utils
})
