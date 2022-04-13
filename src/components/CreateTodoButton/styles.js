import styled from 'styled-components'

export const CreateButton = styled.button`
    background: #DCE5E1;
    box-shadow: 0px 5px 25px rgba(97, 258, 230, 0.3);
    border: none;
    border-radius: 50%;
    font-size: 40px;
    position: fixed;
    bottom: 25px;
    right: 25px;
    font-weight: bold;
    color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease;
    z-index: 1;
    height: 50px;
    width: 50px;
    
    @media screen and (min-width: 1200px){
        height: 64px;
        font-size: 50px;
        width: 64px;
    }

    &:hover {
        transform: rotate(180deg);
        cursor: pointer;
    }
`