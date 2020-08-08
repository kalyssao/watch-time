import React from 'react'
import Sidebar from './Sidebar'
import UserShows from './UserShows'
import styled from 'styled-components'

function Profile () {
    return (
        <div>
            <Sidebar/>
            <UserShows/>
        </div>
    )
}

export default Profile