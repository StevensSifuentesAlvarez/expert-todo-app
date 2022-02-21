import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import ListTasks from './components/ListTasks';

const App = () => {
  const [completedTasks, setCompletedTasks] = useState(true)
  const namedb = 'Tasks'

  const readLocalStorage = () => {
    const dataFromLocalStorage = localStorage.getItem(namedb)
    let parsedTaks
    // let TasksParsed = JSON.parse(dataFromLocalStorage)
    // dataFromLocalStorage ? setTasks(JSON.parse(dataFromLocalStorage)) : setTasks([])
    if (!dataFromLocalStorage) {
      saveLocalStorage([])
      parsedTaks = []
    }else {
      parsedTaks = JSON.parse(dataFromLocalStorage)
    }
    return parsedTaks
  }

  const [tasks, setTasks] = useState(readLocalStorage());
  
  const saveLocalStorage = (tasks) => {
    localStorage.setItem(namedb, JSON.stringify(tasks))
  }

  saveLocalStorage(tasks)
  
  return (
    <div className='contenedor'>
      <Header 
        completedTasks={completedTasks} 
        setCompletedTasks={setCompletedTasks}/>
      <Form 
        tasks={tasks} 
        setTasks={setTasks}
        saveLocalStorage={saveLocalStorage}/>
      <ListTasks 
        tasks={tasks} 
        setTasks={setTasks} 
        completedTasks={completedTasks}
        saveLocalStorage={saveLocalStorage}/>
    </div>
  );
}

export default App;
