import React from 'react'
import { Balls, BallsContainer, LoadingContainer } from './styles'

const LoadingTodos = () => {
  return (
    <LoadingContainer>
      <BallsContainer>
        <Balls />
        <Balls />
        <Balls />
      </BallsContainer>
    </LoadingContainer>
  )
}

export default LoadingTodos