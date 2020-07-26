import React from 'react'
import Movie from './Movie'


const  Movies = (props) => {

    return (
        <div>
            {props.movies && props.movies.map(movie => <Movie movie={movie}/>)}
            Total: {props.movies && props.movies.length}
        </div>
    )
}

export default Movies
