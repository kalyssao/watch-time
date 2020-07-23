import React from 'react'
import styled from 'styled-components'

const Container =  styled.div `
    margin: 0 auto;
    max-width: 1000px;
    padding: 40px;
`;
    

function Main() {
    return (
        <Container>
            <h1>The world's largest tracking tool for TV + movies</h1>
        </Container>
    );
}

export default Main