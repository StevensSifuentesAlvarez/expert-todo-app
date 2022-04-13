import styled from 'styled-components'

export const FormUpdate = styled.form`
    align-items: center;
    display: flex;
    height: auto;
    justify-content: end;
    padding: 10px;
    margin-right: 40px;
    width: 80%;
`

export const Input = styled.input`
    background: rgba(0, 0, 0, .2);
    color: #fff;
    border: none;
    outline: none;
    width: 70%;
    text-align: center;
    font-size: inherit;
    border-radius: 2px;
    padding: 5px;
    border-bottom: 1px solid grey;
    &:hover {
        border-bottom: 1px solid cyan;
    }
    &:focus {
        border-bottom: 1px solid cyan;
    }
`

export const Button = styled.button`
    background: green;
    border-radius: 30px;
    border: none;
    color: whitesmoke;
    outline: none;
    padding: 7px 15px;
    margin-left: 5px;
    width: auto;
    &:hover {
        cursor: pointer;
        background: rgba(0, 200, 0, .5);
    }
`