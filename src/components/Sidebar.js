import React from 'react'
import SearchShows from './searchShows'
import SidebarRow from './SidebarRow'
import styled from 'styled-components'

const SidebarContainer = styled.div`
    flex: 0.2;
    background-color: gold;
    color: white;
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