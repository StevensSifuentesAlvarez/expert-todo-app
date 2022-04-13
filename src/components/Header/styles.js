import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 0 20px;
    text-align: center;
	width: 100%;
    h1 {
        font-size: 40px;
    }
`

export const Subcontainer = styled.div`
    background: #DCE5E1;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .5);
    padding: 30px;
    margin: 10px auto;
    transition: .2s all ease-in;
    
    @media screen and (min-width: 600px) {
        width: 90%;
    }

    @media screen and (min-width: 1000px) {
        width: 70%;
    }

    @media screen and (min-width: 1200px){
        width: 60%;
    }
`
