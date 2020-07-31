import React from 'react'
import styled from 'styled-components'

const VideoCard = styled.div `
    width: 10%
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
    margin-bottom: 2rem;
    margin-left: 2rem;
    padding: 50px;
    width: 30%;
    background-color: white;
    display: flex;
`

const VideoCardImage = styled.img`
    height: 240px;
    width: 200px;
`

const VideoCardInfo = styled.div`
`

function ShowCard({ image, title, rating, desc }) {
    return (
        <VideoCard>
            <VideoCardImage src={image} alt="TV Show Poster"/>

            <VideoCardInfo>
                <h4>{title}</h4>

                <h3>{rating}</h3>

                <p>{desc}</p>

            </VideoCardInfo>
        </VideoCard>
    )
}

export default ShowCard