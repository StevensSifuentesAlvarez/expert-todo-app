import styled from 'styled-components'

export const SectionList = styled.section`
    overflow: auto;
    height: 500px;
    margin: 0px auto;
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