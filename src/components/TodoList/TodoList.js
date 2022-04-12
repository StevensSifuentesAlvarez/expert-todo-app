import React, { useContext } from 'react'
import { TodoContex } from '../../context'
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults'
import EmptyTodos from '../EmptyTodos/EmptyTodos'
import LoadingTodos from '../LoadingTodos/LoadingTodos'
import TodoError from '../TodoError/TodoError'
import { SectionList } from './styles'

const TodoList = ({ children }) => {
  const { loading, error, totalTodos, searchedTodos } = useContext(TodoContex)

  const onLoading = () => new Array(5).fill().map((item, index) => (
    <LoadingTodos key={index} />
  ))

  return (
    <SectionList>
      {error && <TodoError />}
      {loading && onLoading()}
      {(!loading && !totalTodos) && <EmptyTodos />}
      {(!!totalTodos && !searchedTodos.length) && <EmptySearchResults />}
      <ul>
        {children}
      </ul>
    </SectionList>
  )
}

export default TodoList