import React from 'react'
import Title from './Title/Title'
import InputTask from './InputTask/InputTask'

const HeaderTodo = ({handleAddTask, taskToUpdate, handleSaveUpdateTask}) => {
  return (
    <div>
        <Title/>
        <InputTask handleAddTask={handleAddTask} taskToUpdate={taskToUpdate} handleSaveUpdateTask={handleSaveUpdateTask}/>
    </div>
  )
}

export default HeaderTodo