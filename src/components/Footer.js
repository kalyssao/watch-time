import React from "react"
import styled from 'styled-components'

const FooterDiv = styled.div`
    color: white;
    margin-top: 1rem;
    padding: 1rem;
    background-color: black;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    a {
        color: white;
    }
`

function Footer() {
    return (
        <FooterDiv>
            <p><a href="http://kalyssao.github.io"> The Lyss</a> built this with <span role="img" aria-label="heart emoji" >❤️ {' '}</span></p>
        </FooterDiv>
    )
}

export default Footer