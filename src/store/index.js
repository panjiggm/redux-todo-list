import { createStore } from 'redux'
import rooeReducer from './reducers'

export default createStore(
  rooeReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
