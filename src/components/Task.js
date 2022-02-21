import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({task:{texto, id, completada}, toggleCompleted, updateTask, deleteTask}) => {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(texto)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        updateTask(id, value)
        setEdit(!edit)
    }

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon 
                icon={completada ? faCheckSquare : faSquare}
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={() => toggleCompleted(id)}
                />
            {
                (edit) ? 
                    <form action="" onSubmit={handleSubmit} className='formulario-editar-tarea'>
                        <input 
                            className='formulario-editar-tarea__input'
                            value={value}
                            onChange={({target}) => setValue(target.value)}/>
                        <button type='submit' className='formulario-editar-tarea__btn'>Update</button>
                    </form>
                    
                :
                    <div className='lista-tareas__texto'>{value}</div>
            }
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon 
                    icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => setEdit(!edit)}/>
                <FontAwesomeIcon 
                    icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => deleteTask(id)}/>
            </div>
        </li>
    )
}

export default Task