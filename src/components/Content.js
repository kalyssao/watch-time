import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const ContentContainer = styled.div`
    flex: 0.8;
`

class Content extends React.Component() {
    render(){
        return (
            <>
                <Sidebar></Sidebar>
                <ContentContainer>
                    <h1>Test</h1>
                </ContentContainer>
            </>
        )
    }
}
export default Content