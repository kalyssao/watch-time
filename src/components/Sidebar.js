import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const SidebarDiv = styled.div`
    background-color: gold;
    color: white;
    position: fixed;    
`

const SidebarButton = styled.button`
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: gold;
    border: 2px solid gold;
    margin: 0 1em;
    padding: 0.25em 1em;
`

function Sidebar() {
    return (
        <SidebarDiv>
            <SearchBar></SearchBar>
            <ul>
                <SidebarButton>Watchlist</SidebarButton>
                <SidebarButton>Favorites</SidebarButton>
                <SidebarButton>Trends</SidebarButton>
            </ul>
        </SidebarDiv>
    )
}

export default Sidebar