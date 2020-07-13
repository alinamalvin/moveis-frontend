import React from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'

const  Movies = (props) => {

    console.log(props)

    const handleDelete = (movie) => {
        props.deleteMovie(movie.id, movie.account_id)
    }


    return (
        <div>
            {props.movies && props.movies.map(movie =>
              <h5><li key={movie.id}>{movie.name}-{movie.kind}<button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(movie)}>Delete</button></li></h5>            
            )}
        </div>
    )
}

export default connect(null, {deleteMovie})(Movies)
