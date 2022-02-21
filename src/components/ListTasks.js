import React from 'react'
import Task from './Task'

const ListTasks = ({ tasks, setTasks, completedTasks, saveLocalStorage }) => {

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => (
            task.id===id ? {...task, completada: !task.completada} : task
        )))
    }

    const updateTask = (id, texto) => {
        setTasks(tasks.map(task => (
            task.id===id ? {...task, texto} : task
        )))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id!==id))
    }

    return (
        <ul className='lista-tareas'>
            {
                tasks.length!==0 ? tasks.map(task => {
                    if (completedTasks) {
                        return <Task 
                        key={task.id}
                        task={task}
                        toggleCompleted={toggleCompleted}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                    } else if (!task.completada){
                        return <Task 
                                key={task.id}
                                task={task}
                                toggleCompleted={toggleCompleted}
                                updateTask={updateTask}
                                deleteTask={deleteTask}
                            />
                        
                    }
                    return
                })
                : <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>
            }
        </ul>
    )
}

export default ListTasks