import { combineReducers } from 'redux'
import colorsReducer from './colorsReducer'

export default combineReducers({
  colors: colorsReducer
})