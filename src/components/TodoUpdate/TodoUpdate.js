import React, { useContext } from 'react'
import { AiOutlineReload } from "react-icons/ai"
import { toast } from 'react-toastify'
import { TodoContex } from '../../context'
import { useForm } from '../../hooks/useForm'
import { Button, FormUpdate, Input } from './styles'

const TodoUpdate = ({ inputEdit, setEdit, text, id }) => {
    const {updateTodo} = useContext(TodoContex)
    const [{ newTodo }, handleChange] = useForm({ newTodo: text })

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTodo(id, newTodo)
        setEdit(edit => !edit)
        toast.success('¡TODO actualizado con éxito!', {
            position: "top-right",
            autoClose: 3000,
        });
    }

    return (
        <FormUpdate onSubmit={handleSubmit}>
            <Input
                ref={inputEdit}
                autoComplete='off'
                name='newTodo'
                value={ newTodo }
                onChange={ handleChange }/>
            <Button type='submit'>
                <AiOutlineReload  />
            </Button>
        </FormUpdate>
    )
}

export default TodoUpdate