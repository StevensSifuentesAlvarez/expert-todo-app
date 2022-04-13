import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: #DCE5E1;
    box-shadow: 10px 0px 10px rgba(0, 0, 0, .5);
    width: 40%;
    height: 180px;
    border-radius: 0 80% 0 0;
    display: flex;
    align-items: center;
    transition: .2s all ease-in-out;
    
    ul {
        margin: 10px 0 0 30%;
        @media screen and (min-width: 800px) {
            margin: auto 10px;
        }
    }
    
    li {
        cursor: pointer;
        padding: 10px;
        list-style: none;
        border-radius: 50%;
        transition: .3s all ease-in;
        &:hover {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
        }
    }
    
    @media screen and (min-width: 800px) {
        border-radius: 0 20px 20px 0;
        box-shadow: 5px 0px 10px rgba(0, 0, 0, .5);
        height: 90%;
        width: 70px;
        margin: auto 0;
        position: absolute;
    }
`