import React, { useContext } from 'react'
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
    }

    return (
        <FormUpdate onSubmit={handleSubmit}>
            <Input
                ref={inputEdit}
                autoComplete='off'
                name='newTodo'
                value={ newTodo }
                onChange={ handleChange }/>
            <Button type='submit'>Update</Button>
        </FormUpdate>
    )
}

export default TodoUpdate