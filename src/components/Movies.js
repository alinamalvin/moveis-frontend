import React from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import LikeButton from './LikeButton'


const  Movies = (props) => {

    const handleDelete = (movie) => {
        props.deleteMovie(movie.id, movie.account_id)
    }

    return (
        <div>
            {props.movies && props.movies.map(movie =>
              <h5>
                  <div style={{display: 'inline-block', flexDirection: 'column'}}><LikeButton /></div>
              <div style={{display: 'inline-block', flexDirection: 'column'}}>
              <ul key={movie.id} >
                  {movie.name} ({movie.kind}) 
                  <button type="button" 
                          class="btn btn-outline-danger"
                          onClick={() => handleDelete(movie)}>
                              Delete
                   </button>
                </ul>
               </div>
               </h5>            
            )}
            Total: {props.movies && props.movies.length}
        </div>
    )
}

export default connect(null, {deleteMovie})(Movies)
