import React from 'react'
import axios from '../services/tvdb'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Input = styled.input.attrs(props => ({
    type: 'text'
}))`
    border-radius: 20px;
    margin: 1rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    background-color: #fefefe
    color: white;
    
    ::placeholder {
        color: gold
    }
`

class SearchShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: '',
            rating: '',
            name: '',
            slug: ''
        }
    }

    searchShows = async (e) => {
        e.preventDefault()

        const query = 'Titanic'
        const url = `https://api.themoviedb.org/3/search/movie?${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        
        axios.get(url)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <form className="searchForm" onSubmit={this.searchShows}>
                    <Input placeholder="Enter TV show"/>
                    <Button type="submit">Submit</Button>
                </form> 
            </div>
        )
    }
}

export default SearchShows