import React from 'react'
import TaskList from './TaskList/TaskList'

const BodyTodo = ({tasks, }) => {
  return (
    <div className=''>
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default BodyTodo