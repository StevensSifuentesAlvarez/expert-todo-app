import React, { useContext } from 'react'
import { TodoContex } from '../../context'

const EmptySearchResults = () => {
    const {searchValue} = useContext(TodoContex)

    return (
        <p style={{
            textAlign: 'center',
            margin: '50px 0',
            fontSize: '24px'
        }}>
            No se encontró: { searchValue }
        </p>
    )
}

export default EmptySearchResults