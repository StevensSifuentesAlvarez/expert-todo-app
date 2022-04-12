import styled from 'styled-components'

export const Form = styled.form`
    background: #202d4e;
    border-radius: 40px;
    padding: 30px 50px;
    text-align: center;
    width: 30%;
`

export const TextArea = styled.textarea`
    background-color: #010f33;
    margin: 10px auto 0;
    width: 90%;
    height: 150px;
    border: none;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    padding: 10px 0;
    resize: none;
    color: #ffffff;
    outline: none;

    @media (max-width: 1080px) {
        height: 200px;
    }

    @media (max-width: 800px) {
        height: 150px;
    }
`

export const Button = styled.button`
    border: none;
    color: white;
    height: 50px;
    width: 30%;
    margin: 10px 20px;
    border-radius: 20px;
    background: ${props => props.cancel ? '#c0392b' : '#27ae60' };

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        height: 75px;
        width: 35%;
    }

    @media (max-width: 800px) {
        height: 75px;
        width: 30%;
    }
`