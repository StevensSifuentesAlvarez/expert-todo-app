import styled from 'styled-components'

export const Input = styled.input`
    width: 90%;
    border: none;
    text-align: center;
    height: 50px;
    border-radius: 10px;
    background: #1E1E24;
    color: #DCE5E1;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: .8s;
    outline: none;
    font-size: inherit;

    &:hover {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
    
    &:focus {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
` 

