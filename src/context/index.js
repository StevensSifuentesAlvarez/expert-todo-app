import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContex = createContext()

export const TodoProvider = ({ children }) => {
    const { todos, saveTodos, loading, error } = useLocalStorage('todos', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [stateFilter, setStateFilter] = useState({ all: true, actives: false, completed: false })

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (!searchValue.length >= 1) {
        if(stateFilter.actives) {
            searchedTodos = todos.filter(todo => (todo.completed!==true))
        }else if(stateFilter.completed) {
            searchedTodos = todos.filter(todo => (todo.completed===true))
        }else {
            searchedTodos = todos
        }
    }else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const addTodo = (text) => {
        const newTodo = {
            id: uuidv4(),
            text,
            completed: false
        }
        saveTodos([...todos, newTodo])
    };

    const completeTodo = (id) => {
        saveTodos(todos.map(todo => (
            todo.id===id ? {...todo, completed: !todo.completed} : todo
        )))
    }

    const updateTodo = (id, text) => {
        saveTodos(todos.map(todo => (
            todo.id===id ? {...todo, text} : todo
        )))
    }

    const deleteTodo = (id) => {
        saveTodos(todos.filter(todo => todo.id!==id))
    };

    return (
        <TodoContex.Provider value={{ 
            loading, 
            error, 
            totalTodos, 
            completedTodos, 
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            updateTodo,
            openModal,
            setOpenModal,
            setStateFilter,
            stateFilter
        }}>
            { children }
        </TodoContex.Provider>
    )
}