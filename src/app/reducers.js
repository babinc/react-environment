import { combineReducers } from 'redux'
import todos from '../todo/reducers/todos'
import visibilityFilter from '../todo/reducers/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
