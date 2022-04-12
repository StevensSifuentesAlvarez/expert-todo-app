import React, { useContext, useState } from 'react'
import { FaCheck, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'

import { TodoContex } from '../../context'
import { useForm } from '../../hooks/useForm'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo:{ id, text, completed } }) => {
    const [formValues, handleChange] = useForm({ newTodo: text })
    const [edit, setEdit] = useState(false)
    const { completeTodo, deleteTodo, updateTodo } = useContext(TodoContex)
    
    const { newTodo } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTodo(id, newTodo)
        setEdit(!edit)
    }

    return (
        <li className={ styles.todoItem }>
            <FaCheck 
                className={ completed ? styles.iconCheckActive : styles.todoCheck  } 
                onClick={ () => completeTodo(id) } />
            {
                (edit) ? 
                    <form onSubmit={handleSubmit}>
                        <input 
                            style={{
                                color: 'black'
                            }}
                            name='newTodo'
                            value={ newTodo }
                            onChange={ handleChange }/>
                        <button type='submit'>Update</button>
                    </form>
                    
                :
                <p className={ completed ? styles.todoItemCompleted : '' }>
                    { newTodo }
                </p>
            }
            <div>
                <FaPencilAlt 
                    className={ styles.updateTodo }
                    onClick={ () => setEdit(!edit) } />
                <FaTrashAlt 
                    className={ styles.deleteTodo } 
                    onClick={ () => deleteTodo(id) } />
            </div>
        </li>
    )
}

export default TodoItem