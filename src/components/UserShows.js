import React from 'react'
import ShowCard from './ShowCard.js'
import styled from 'styled-components'
function UserShows() {
    //const { isLoading } = this.props

    //const loadingMessage = <span className="d-flex m-auto">Loading...</span>

    const VideoDisplay = styled.div`
        display: flex;
        flex-wrap: wrap;
    `

    const tvShows = (
        <VideoDisplay>
            <ShowCard title="The Vampire Diaries" 
                image="https://artworks.thetvdb.com/banners/posters/95491-40.jpg"
                rating="4"
                desc="Elena Gilbert is immediately drawn to Stefan Salvatore, the new student at her high school. Little does she know, the attraction leads her and her friends into the supernatural world surrounding their quiet town, Mystic Falls, as they become entangled in the lives of Stefan and his brother, Damon — both of whom happen to be vampires."/>

<ShowCard title="The Vampire Diaries" 
                image="https://artworks.thetvdb.com/banners/posters/95491-40.jpg"
                rating="4"
                desc="Elena Gilbert is immediately drawn to Stefan Salvatore, the new student at her high school. Little does she know, the attraction leads her and her friends into the supernatural world surrounding their quiet town, Mystic Falls, as they become entangled in the lives of Stefan and his brother, Damon — both of whom happen to be vampires."/>
        </VideoDisplay>
    )

    return (
        <div>
            {tvShows}
        </div>
    )
}

export default UserShows