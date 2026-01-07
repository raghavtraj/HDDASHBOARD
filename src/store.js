import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import dashboardReducer from './store/dashboardReducer'

const sidebarReducer = (state = true, action) => {
  switch (action.type) {
    case 'set':
      return action.sidebarShow
    default:
      return state
  }
}

const rootReducer = combineReducers({
  sidebarShow: sidebarReducer,
  dashboard: dashboardReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
