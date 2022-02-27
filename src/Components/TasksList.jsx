import React, { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'
import "../App.css"

const TasksList = () => {
    const {arrayTasks,EditTask,DeleteTask}=useContext(TaskContext)
  return (
        <div className='ListTasks'>
        {arrayTasks.map((tasks) => (
          <div key={tasks.id} className="task">
            {tasks.name}
            <div className='buttons'>
            <img src='icons/IconEdit.png' alt='BtnEdit' className="Btn" onClick={() => EditTask(tasks)}/>
            <img src='/icons/IconDelete.png' alt='BtnDelete' className='Btn' onClick={() => DeleteTask(tasks)}/>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TasksList