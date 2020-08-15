import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Rating from './Rating'

const VideoWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-color: transparent;
    border-radius: 0.8rem;
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;

    &:hover {
        transform: scale(1.03);

        ::after {
            transform: scaleY(1);
            opacity: 1;
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.8rem;
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
        background-color: gold;
        z-index: -99;
        box-shadow: 0rem 2rem 5rem black;
        transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }

`

const VideoCard = styled.div `
    width: 10%
    border-radius: 0.8rem;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
    margin-bottom: 2rem;
    margin-left: 2rem;
    padding: 50px;
    width: 30%;
    background-color: white;
    display: flex;
`

const VideoCardImage = styled.img`
    height: 38rem;
    width: 100%;
    border-radius: 0.8rem;
    transition: all 100ms cubic-bezeri(0.645, 0.045, 0.355, 1);
`

const VideoCardInfo = styled.div`
`

const RatingsWrapper = styled.div `
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 0.5rem;
    color: var(--color-primary);

    ${VideoWrapper}:hover & {
        color: var(--color-primary-lighter);
    }
`

function ShowCard({ image, title, rating, desc }) {
    return (
        <VideoWrapper>
            <VideoCard>
                <VideoCardImage src={image} alt="TV Show Poster"/>

                <VideoCardInfo>
                    <h4>{title}</h4>

                    <h3>{rating}</h3>

                    <p>{desc}</p>

                </VideoCardInfo>

                <RatingsWrapper>
                </RatingsWrapper>

            </VideoCard>
        </VideoWrapper>
    )
}

export default ShowCard