import React, { useContext } from 'react'
import { TodoContex } from '../../context'
import { Title } from './styles'

const TodoCounter = () => {
    const { totalTodos, completedTodos } = useContext(TodoContex)

    return (
        <Title>
            Has completado { completedTodos } de { totalTodos } TODOs
        </Title>
    )
}

export default TodoCounter