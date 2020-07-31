import React from 'react'
import styled from 'styled-components'

const RowItem = styled.div `
    display: flex;
    background: transparent;
    
`

function SidebarRow ({ title }) {
    return (
        <RowItem>
            <p>{title}</p>
        </RowItem>
    )
}

export default SidebarRow