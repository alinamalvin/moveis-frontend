import React from 'react'

const  Movies = (props) => {
    return (
        <div>
            {props.movies && props.movies.map(movie =>
               <li key={movie.id}>{movie.name}-{movie.kind}</li>                
            )}
        </div>
    )
}

export default Movies;
