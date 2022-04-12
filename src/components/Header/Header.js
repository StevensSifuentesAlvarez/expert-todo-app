import TodoCounter from '../TodoCounter/TodoCounter'
import TodoSearch from '../TodoSearch/TodoSearch'

import { HeaderContainer, Subcontainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Todo App</h1>
      <Subcontainer>
        <TodoCounter />
        {/* FilterTodos */}
        <TodoSearch />
      </Subcontainer>
    </HeaderContainer>
  )
}

export default Header