import { createAction } from 'redux-actions'

export default {
  setScreenWidth: createAction('SET_SCREENWIDTH', function () {
    let w = window
    let d = document
    let documentElement = d.documentElement
    let body = d.getElementsByTagName('body')[0]
    let width = w.innerWidth || documentElement.clientWidth || body.clientWidth
    // let height = w.innerHeight || documentElement.clientHeight || body.clientHeight
    return width
  }),
  setLang: createAction('SET_LANG', (lang) => {
    return lang
  })
}
