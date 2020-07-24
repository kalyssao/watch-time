import React from 'react'
import Tile from './Tile.js'

function Tiles() {
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

export default Tiles