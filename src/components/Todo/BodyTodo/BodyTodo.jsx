import React from 'react'
import TaskList from './TaskList/TaskList'

const BodyTodo = ({tasks, handleDeleteTask }) => {
  return (
    <div className=''>
        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default BodyTodo