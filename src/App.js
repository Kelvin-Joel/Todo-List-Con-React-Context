import './App.css';
import FormRegister from './Components/FormRegister';
import TasksList from './Components/TasksList';
import TaskContext from './Context/TaskContext';

function App() {
 
  return (
    <TaskContext>
      <div className="App">
      <FormRegister/>
      <TasksList/>
     </div>
    </TaskContext>
  );
}

export default App;
