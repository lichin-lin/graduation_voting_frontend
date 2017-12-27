import createHistory from 'history/createBrowserHistory'
import configureStore from './stores/Store'
const history = createHistory()
const store = configureStore(history)

export { history, store }
