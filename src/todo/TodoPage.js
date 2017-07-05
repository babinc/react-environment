import React from 'react'
import Footer from '../todo/components/Footer'
import AddTodo from '../todo/containers/AddToDo'
import VisibleTodoList from '../todo/containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
