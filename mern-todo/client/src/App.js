import React from 'react'

import {Routes, Route} from 'react-router-dom'
import EditTodo from './EditTodo'
import TodoHome from './TodoHome'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoHome />} />
        <Route path='/edit-todo' element={<EditTodo />} />
      </Routes>
    </>
  )
}
