// import TodoCounter from '../TodoCounter/TodoCounter'
// import TodoSearch from '../TodoSearch/TodoSearch'

import { HeaderContainer, Subcontainer } from './styles'

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <h1>Todo App</h1>
      <Subcontainer>
        { children }
      </Subcontainer>
    </HeaderContainer>
  )
}

export default Header