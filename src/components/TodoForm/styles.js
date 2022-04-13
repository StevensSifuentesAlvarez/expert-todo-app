import styled from 'styled-components'

export const Form = styled.form`
    background: #1E1E24;
    border-radius: 10px;
    padding: 30px 50px;
    text-align: center;
    width: 90%;
    transition: .2s all ease-in;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media screen and (min-width: 600px) {
        width: 80%;
    }
    @media screen and (min-width: 800px) {
        width: 70%;
    }
    
    @media screen and (min-width: 1000px) {
        width: 50%;
    }
    @media screen and (min-width: 1200px){
        width: 30%;
        border-radius: 30px;
    }
    
`

export const TextArea = styled.textarea`
    background: #ABC6C1;
    margin: 10px auto 0;
    width: 100%;
    height: 150px;
    border: none;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    padding: 10px 0;
    resize: none;
    color: #ffffff;
    outline: none;
    font-size: 16px;

    &:hover {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
    
    &:focus {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
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
    padding: 15px 0;
    width: 30%;
    margin: 10px 20px;
    border-radius: 10px;
    background: ${props => props.cancel ? '#542727' : '#0F4325' };
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    
    &:hover {
        cursor: pointer;
        background: ${props => props.cancel ? '#C68383' : 'rgba(0, 150, 0, .8)' };
    }

    @media (max-width: 1080px) {
        height: 75px;
        width: 35%;
    }

    @media (max-width: 800px) {
        height: 30px;
        width: 30%;
        padding: 0;
    }
`