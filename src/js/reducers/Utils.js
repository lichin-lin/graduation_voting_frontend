import { handleActions } from 'redux-actions'

const initialState = {
  width: 1024,
  lang: 'en'
}

export default handleActions({
  SET_SCREENWIDTH: {
    next (state, action) {
      return {
        ...state,
        width: action.payload
      }
    },
    throw (state, {payload}) {
      return initialState
    }
  },
  SET_LANG: {
    next (state, action) {
      return {
        ...state,
        lang: action.payload
      }
    },
    throw (state, {payload}) {
      return initialState
    }
  }
}, initialState)
