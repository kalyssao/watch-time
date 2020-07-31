import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    flex: 0.8;
`

function Profile () {
    return (
        <div>
            <Sidebar></Sidebar>
            <ProfileContainer>
                <h1>Some text to check</h1>
            </ProfileContainer>
        </div>
    )
}

export default Profile