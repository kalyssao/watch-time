import React from 'react'
import ShowCard from './ShowCard'
import styled from 'styled-components'

const VideoDisplay = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 80%;
    `
function UserShows() {
    //const { isLoading } = this.props

    //const loadingMessage = <span className="d-flex m-auto">Loading...</span>

    const tvShows = (
        <VideoDisplay>
            <ShowCard title="The Vampire Diaries" 
                image="https://upload.wikimedia.org/wikipedia/en/b/b9/The_Vampire_Diaries_S8_DVD_Cover.jpg"
                rating="4"
                desc="Elena Gilbert is immediately drawn to Stefan Salvatore, the new student at her high school. Little does she know, the attraction leads her and her friends into the supernatural world surrounding their quiet town, Mystic Falls, as they become entangled in the lives of Stefan and his brother, Damon — both of whom happen to be vampires."/>

            <ShowCard title="The Vampire Diaries" 
                image="https://upload.wikimedia.org/wikipedia/en/b/b9/The_Vampire_Diaries_S8_DVD_Cover.jpg"
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