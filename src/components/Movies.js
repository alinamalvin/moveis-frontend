import React from 'react'
import Movie from './Movie'


const  Movies = (props) => {

    return (
        <div>
            {props.movies && props.movies.map(movie => <Movie movie={movie}/>)}
              {/* <h5>
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
               */}
            Total: {props.movies && props.movies.length}
        </div>
    )
}

export default Movies
