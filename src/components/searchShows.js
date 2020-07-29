import React from 'react'
import axios from '../services/tvdb'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

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
    const [search, setSearch] = useState(" ")
    constructor(props) {
        super(props)
        this.state = {
            id: Number,
            name: String,
            imageURL: String,
            query: String
            //rating: '',
            //slug: ''
        }
    }

    handleFormChange = (e) => {
        this.setState({ query: e.target.value })
        //this.setSearch("e.target.value")
    }

    searchShows = async (e) => {
        e.preventDefault()

        const query = 'Titanic'
        const url = `https://api.themoviedb.org/3/search/movie?${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        
        axios.get(url)
        .then(response => {
            console.log(response.data)
            this.setState({ 
                id: response.data.id,
                name: response.data.seriesName,
                imageURL: response.data.image
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <form className="searchForm" onSubmit={this.searchShows}>
                    <Input placeholder="Enter TV show" name="query" onChange={this.handleFormChange}/>
                    <Link to={`/search/${search}`}>
                    </Link>
                    
                    <Button type="submit">Submit</Button>
                </form> 
            </div>
        )
    }
}

export default SearchShows