import React, { useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import "../App.css"
import swal from 'sweetalert';

const FormRegister = () => {
  const {
    data,
    setData,
    SaveTask,
    dataInitial,
    setArrayTasks,
    arrayTasks,
  } = useContext(TaskContext);

  const handleChange = (e) => {
    data.id = Date.now();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandldeSubmit = (e) => {
    e.preventDefault();
    if(data.name!==''){
      setArrayTasks([...arrayTasks, data]);
      swal("Se Registro Correctamente", "", "success");
      return
    }
    swal("Error Campos Vacios", "", "error");
    
    //list_task = listTask;
  };
  useEffect(() => {
    SaveTask();
    setData(dataInitial);
  }, [arrayTasks]);

  return (
    <div>
      <h2>Todos List!</h2>
      <form onSubmit={(e) => HandldeSubmit(e)}>
        <input
         className="TxtName"
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
        <button className="BtnAdd">Add!</button>
      </form>
    </div>
  );
};

export default FormRegister;
