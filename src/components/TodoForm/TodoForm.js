import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { TodoContex } from '../../context'
import { useForm } from '../../hooks/useForm'
import { Button, Form, TextArea } from './styles'
import 'react-toastify/dist/ReactToastify.css'

const TodoForm = () => {
    const [formValues, handleChange] = useForm({ newTodoValue: '' })
    const { addTodo, setOpenModal } = useContext(TodoContex)

    const { newTodoValue } = formValues

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (newTodoValue.length !== 0) {
            addTodo(newTodoValue)
            onCancel()
            toast.success('¡TODO agregado con éxito!', {
                position: "top-right",
                autoClose: 2000,
            });
        } else {
            toast.info('Escribe un TODO 👇🏻', {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }

    const handleModal = (e) => {
        if (e.keyCode === 13) {
            onSubmit(e)
        } else if (e.keyCode === 27) {
            onCancel()
        }
    }

    return (
        <>
            <Form onSubmit={onSubmit} className='animate__animated animate__backInRight'>
                <TextArea
                    name='newTodoValue'
                    value={newTodoValue}
                    onChange={handleChange}
                    onKeyDown={handleModal}
                    placeholder='Escribe tu nuevo TODO' />
                <div>
                    <Button
                        cancel
                        type='button'
                        onClick={onCancel} >
                        Cancelar
                    </Button>
                    <Button
                        type='submit' >
                        Agregar
                    </Button>
                </div>
            </Form>
            <ToastContainer />
        </>
    )
}

export default TodoForm