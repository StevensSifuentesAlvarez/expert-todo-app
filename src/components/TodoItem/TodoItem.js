import React, { useContext, useState } from 'react'
import { FaCheck, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { TodoContex } from '../../context'
import TodoUpdate from '../TodoUpdate/TodoUpdate'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo:{ id, text, completed } }) => {
    const { completeTodo, deleteTodo } = useContext(TodoContex)
    const [edit, setEdit] = useState(false)
    
    const handleUpdate = () => {
        setEdit(!edit)
    }

    return (
        <li className={ styles.todoItem }>
            <FaCheck 
                className={ completed ? styles.iconCheckActive : styles.todoCheck  } 
                onClick={ () => completeTodo(id) } />
            {
                (edit) ? 
                    <TodoUpdate setEdit={setEdit} text={text} id={id}/>
                :
                    <p className={ completed ? styles.todoItemCompleted : '' }>
                        { text }
                    </p>
            }
            <div>
                <FaPencilAlt 
                    className={ styles.updateTodo }
                    onClick={ handleUpdate } />
                <FaTrashAlt 
                    className={ styles.deleteTodo } 
                    onClick={ () => deleteTodo(id) } />
            </div>
        </li>
    )
}

export default TodoItem