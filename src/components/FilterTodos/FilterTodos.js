import React, { useContext } from 'react'
import { TodoContex } from '../../context'
import styles from './FilterTodos.module.css'

const FilterTodos = () => {
    const { stateFilter, setStateFilter } = useContext(TodoContex)

    const handleFilter = (filter) => {
        switch(filter){
            case 'all':
                setStateFilter({ all: true, actives: false, completed: false })
                break
            case 'actives':
                setStateFilter({ all: false, actives: true, completed: false })
                break
            case 'completed':
                setStateFilter({ all: false, actives: false, completed: true })
                break
        }
    }

    return (
        <nav className={styles.navegation}>
            <ul className={styles.containerLinks}>
                <li className={stateFilter.all ? styles.active : styles.links}
                    onClick={() => handleFilter('all')}>
                    Todos
                </li>
                <li className={stateFilter.actives ? styles.active : styles.links}
                    onClick={() => handleFilter('actives')}>
                    Activos
                </li>
                <li className={stateFilter.completed ? styles.active : styles.links}
                    onClick={() => handleFilter('completed')}>
                    Completados
                </li>
            </ul>
        </nav>
    )
}

export default FilterTodos