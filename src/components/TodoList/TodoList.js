import React from 'react'

import { SectionList } from './styles'

const TodoList = ({ children }) => {
  return (
    <SectionList>
        <ul>
            { children }
        </ul>
    </SectionList>
  )
}

export default TodoList