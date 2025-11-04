import React from 'react'
import './Task.css'
import EditIcon from '../../../Icons/EditIcon'
import DeleteIcon from '../../../Icons/DeleteIcon'

const Task = ({task}) => {
  return (
      <>
      <li className='Task'>{task}<div className='Task__btns'><button type="button"><EditIcon/></button><button type="button"><DeleteIcon/></button></div></li>
      
      
      </>
  )
}

export default Task