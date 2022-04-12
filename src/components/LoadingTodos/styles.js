import styled from 'styled-components'

export const LoadingContainer = styled.li`
    background-color: #121f3d;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #17274e;
    border-radius: 10px;
    margin: 10px 8%;
    padding: 0 10px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const BallsContainer = styled.div`
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Balls = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #202d4e;
    
    &:nth-child(1) {
        animation: opacitychange 1s ease-in-out 0.66s infinite;
    }
    &:nth-child(2) {
        animation: opacitychange 1s ease-in-out infinite;
    }
    &:nth-child(3) {
        animation: opacitychange 1s ease-in-out 0.33s infinite;
    }

    @keyframes opacitychange {
    0%, 100% {
        opacity: 0;
    }
    60% {
        opacity: 1;
    }
}
`