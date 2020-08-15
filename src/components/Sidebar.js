import React from 'react'
import SearchBar from './SearchBar'
import SidebarRow from './SidebarRow'
import styled from 'styled-components'

const SidebarContainer = styled.div`
    background-color: gold;
    color: white;
    width: 20%;
`

export default function Sidebar() {
    return (
        <SidebarContainer>
            <SearchBar/>
            <ul>
                <SidebarRow title="Watchlist"/>
                <SidebarRow title="Favorites"/>
                <SidebarRow title="Trends"/>
            </ul>
        </SidebarContainer>
    )
}

//flex direction - column