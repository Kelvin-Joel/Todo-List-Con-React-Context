import React, { createContext, useState } from 'react'
import swal from 'sweetalert';

export const TaskContext = createContext();

const dataInitial = {
    id: null,
    name: '',
}

export const DataProvider = ({ children }) => {
    const list_task = localStorage.getItem('task') === null ? [] : JSON.parse(localStorage.getItem('task'))

    const [data, setData] = useState(dataInitial)
    const [arrayTasks, setArrayTasks] = useState(list_task)

    const SaveTask = () => {
        localStorage.setItem('task', JSON.stringify(arrayTasks))
    }

    const DeleteTask = (idTask) => {
        let newtTasks = arrayTasks.filter(tasks => tasks.id !== idTask.id)
        setArrayTasks(newtTasks)
        swal("Se Elimino Correctamente", "", "success");
    }

    const EditTask = (newdata) => {
       if(data.name!==''){
        let newTask = arrayTasks.map(task => task.id === newdata.id ? data : task)
        setArrayTasks(newTask)
        SaveTask();
        swal("Editado Correctamente", "", "success");
        return
       }
       swal("Error Campos Vacios", "", "error");
    }

    return (
        <TaskContext.Provider value={{ data, setData, setArrayTasks, arrayTasks, SaveTask, dataInitial, DeleteTask, EditTask }} >
            {children}
        </TaskContext.Provider>
    )
}

export default DataProvider