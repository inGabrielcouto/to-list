import './App.css'
import { useEffect, useState } from "react";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
import ClearAll from "./components/ClearAll";



function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false)


useEffect(()=>{
  localStorage.setItem(`tasks`,JSON.stringify(tasks))
},[tasks])

  const handleTask = (newTask) => {


    setTasks([...tasks, newTask]);
    setInput('');
    console.log(tasks)
  };



  const removeTask = (taskId) => {
    const updateTask = tasks.filter((task) => task.id !== taskId)
    setTasks(updateTask)
  }

  const clearAllTasks = () =>{
 setTasks([]);
  }

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }

  return (
    <div className={`Container ${darkMode ? 'dark' : 'light'}`}>
    <h1>LISTA DE TAREFAS</h1>
   
      <button className="ModeButton" onClick={toggleDarkMode}>
        {darkMode ? 'Modo Dia' : 'Modo Lua'}
      </button>
      <TasksForm input={input} setInput={setInput} handleTask={handleTask} />
      <TasksList removeTask={removeTask} tasks={tasks} />
      <ClearAll clearAllTasks={clearAllTasks} tasks={tasks} />
    
    <p>Quantidade de Tarefas: {tasks.length}</p>
  </div>
);
}

export default App;
