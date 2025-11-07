import React from 'react'
import TaskList from './TaskList/TaskList'

const BodyTodo = ({tasks, handleDeleteTask, handleUpdateTask}) => {
  return (
    <div className=''>
        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask}/>
    </div>
  )
}

export default BodyTodo