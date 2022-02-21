import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const Form = ({ tasks, setTasks, saveLocalStorage }) => {
    const [value, setValue] = useState('');

    // const saveTasks = (t) => {
    //     localStorage.setItem('Tasks', JSON.stringify(t))
    //     setTasks(t)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value!=='') {
            let newTask = {
                id: uuidv4(),
                texto: value,
                completada: false
            }
            // setTasks((oldTask) => [...oldTask, newTask])
            setTasks([...tasks, newTask])
            // saveTasks([...tasks, newTask])
        } else {
            alert('Ingrese la tarea')
        }
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input
                className='formulario-tareas__input'
                placeholder='Ingrese una tarea'
                value={value} 
                onChange={handleChange}
                />
            <button type='submit' className='formulario-tareas__btn'>
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className='formulario-tareas__icono-btn' />
            </button>
        </form>
    )
}

export default Form