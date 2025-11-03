import React from 'react'
import './Task.css'

const Task = ({task}) => {
  return (
      <>
      <li className='Task'>{task}<div className='Task__btns'><button type="button">Edit</button><button type="button">Delete</button></div></li>
      
      
      </>
  )
}

export default Task