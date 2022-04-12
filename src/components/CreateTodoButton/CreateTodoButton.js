import React, { useContext } from 'react'
import { TodoContex } from '../../context'
import { CreateButton } from './styles'

const CreateTodoButton = () => {
    const { setOpenModal } = useContext(TodoContex)
    
    return (
        <CreateButton 
            onClick={() => setOpenModal(prevState => !prevState)} >
            +
        </CreateButton>
    )
}

export default CreateTodoButton