import React from 'react'
import Title from './Title/Title'
import InputTask from './InputTask/InputTask'

const HeaderTodo = ({handleAddTask}) => {
  return (
    <div>
        <Title/>
        <InputTask handleAddTask={handleAddTask}/>
    </div>
  )
}

export default HeaderTodo