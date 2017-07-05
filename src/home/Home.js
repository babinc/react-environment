import React from 'react'
import Footer from './Footer'
import AddTodo from '../home/AddTodo'
import VisibleTodoList from '../home/VisibleTodoList'

const Home = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default Home
