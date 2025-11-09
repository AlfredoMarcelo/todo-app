import React from 'react'
import TaskList from './TaskList/TaskList'

const BodyTodo = ({tasks, handleDeleteTask, handleUpdateTask, handleTaskIsDonde}) => {
  return (
    <div className=''>
        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} handleTaskIsDonde={handleTaskIsDonde}/>
    </div>
  )
}

export default BodyTodo