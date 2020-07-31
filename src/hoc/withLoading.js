import React from 'react'

function WithLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }){
        if( !isLoading ) return <Component { ...props }/>
        return <p>Fetching movies (or spinner component)</p>
    }
}

export default WithLoading