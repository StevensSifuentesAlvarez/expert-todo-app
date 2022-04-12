import styled from 'styled-components'

export const CreateButton = styled.button`
    background-color: #61DAFA;
    box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
    border: none;
    border-radius: 50%;
    font-size: 50px;
    position: fixed;
    bottom: 25px;
    right: 25px;
    font-weight: bold;
    color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 64px;
    transition: .3s ease;
    z-index: 1;

    &:hover {
        transform: rotate(180deg);
        cursor: pointer;
    }
`