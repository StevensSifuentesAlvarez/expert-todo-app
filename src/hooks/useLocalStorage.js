import { useEffect, useState } from 'react'

export const useLocalStorage = (itemName, initialValue) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState(initialValue)

    const loadDatabase = () => {
        const initialTasks = localStorage.getItem(itemName) ? JSON.parse(localStorage.getItem(itemName)) : initialValue
        return initialTasks
    }
    
    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            setTodos(loadDatabase)
            setLoading(false)
        }, 3000)
    }, [])

    const saveTodos = (newItem) => {
        try {
          localStorage.setItem(itemName, JSON.stringify(newItem))
          setTodos(newItem)
        } catch(error) {
          setError(error)
        }
    };

    return { 
        todos,
        saveTodos,
        loading,
        error,
    }
}
