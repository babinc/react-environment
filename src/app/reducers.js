import { combineReducers } from 'redux'
import todosReducer from '../home/todosReducer';
import visibilityFilter from '../home/visibilityFilterReducer'

const todoApp = combineReducers({
  todosReducer,
  visibilityFilter
})

export default todoApp
