import { useContext, useState } from 'react'

import Form from './components/Form'
import ListTasks from './components/ListTasks'

import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import TodoForm from './components/TodoForm/TodoForm'
import TodoItem from './components/TodoItem/TodoItem'
import TodoList from './components/TodoList/TodoList'
import { TodoContex } from './context'

import './App.css'

const App = () => {
  const { searchedTodos, openModal } = useContext(TodoContex)
  console.log(searchedTodos)
  // const [completedTasks, setCompletedTasks] = useState(true)
  // const namedb = 'Tasks'
  // console.log(namedb)

  /* const readLocalStorage = () => {
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
  } */

  // const [tasks, setTasks] = useState(readLocalStorage());
  
  /* const saveLocalStorage = (tasks) => {
    localStorage.setItem(namedb, JSON.stringify(tasks))
  } */

  // saveLocalStorage(tasks)
  
  return (
    <div>
      <Header />

      <TodoList>
        { searchedTodos.map(todo => (
                          <TodoItem 
                            key={todo.id}
                            todo={todo} />
        )) }
      </TodoList>

      { openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />

      {/* <Footer /> */}


      {/* <Form 
        tasks={tasks} 
        setTasks={setTasks}
        saveLocalStorage={saveLocalStorage}/> */}
      {/* <ListTasks 
        tasks={tasks} 
        setTasks={setTasks} 
        completedTasks={completedTasks}
        saveLocalStorage={saveLocalStorage}/> */}
    </div>
  )
}

export default App
