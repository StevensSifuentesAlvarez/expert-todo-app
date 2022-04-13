import { useContext } from 'react'

import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'
import Footer from './components/Footer/Footer'
import FilterTodos from './components/FilterTodos/FilterTodos'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import TodoCounter from './components/TodoCounter/TodoCounter'
import TodoForm from './components/TodoForm/TodoForm'
import TodoItem from './components/TodoItem/TodoItem'
import TodoList from './components/TodoList/TodoList'
import TodoSearch from './components/TodoSearch/TodoSearch'

import { TodoContex } from './context'
import { Container } from './styles'

const App = () => {
  const { searchedTodos, openModal } = useContext(TodoContex)
  
  return (
    <Container>
      <div>
        <Header>
          <TodoCounter />
          <TodoSearch />
          <FilterTodos />
        </Header>

        <TodoList >
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
      </div>
      <Footer />
    </Container>
  )
}

export default App
