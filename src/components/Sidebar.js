import React from 'react'
import SearchShows from './searchShows'
import SidebarRow from './SidebarRow'
import styled from 'styled-components'

const SidebarContainer = styled.div`
    background-color: gold;
    color: white;
    width: 20%;
`

function Sidebar() {
    return (
        <SidebarContainer>
            <SearchShows></SearchShows>
            <ul>
                <SidebarRow title="Watchlist"/>
                <SidebarRow title="Favorites"/>
                <SidebarRow title="Trends"/>
            </ul>
        </SidebarContainer>
    )
}

export default Sidebar

//flex direction - column