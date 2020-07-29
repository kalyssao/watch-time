import React from 'react'
import ShowCard from './ShowCard.js'

function UserShows() {
    const { isLoading } = this.props

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>

    const tvShows = (
        <div>

        </div>
    )

    return (
        <div>
            {isLoading ? loadingMessage : tvShows}
        </div>
    )
}

export default UserShows

display: flex (parent container)
flex-wrap: wrap

card info
display: flex

display flex
space between