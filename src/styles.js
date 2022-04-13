import styled from 'styled-components'

export const Container = styled.div`
    display: block;

    @media screen and (min-width: 800px){
        display: grid;
        grid-template-columns: 100px 1fr;
        div{
            grid-column: 2 / span 1; 
        }
        footer {
            grid-row: 1 / span 1;
            grid-column: 1 / span 1;
        }
    }
`