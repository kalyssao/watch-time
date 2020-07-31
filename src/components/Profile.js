import React from 'react'
import Sidebar from './Sidebar'
import UserShows from './UserShows'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    flex: 0.8;
`

function Profile () {
    return (
        <div>
            <Sidebar></Sidebar>
            <ProfileContainer>
                <UserShows/>
            </ProfileContainer>
        </div>
    )
}

export default Profile