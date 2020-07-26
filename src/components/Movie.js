import React from 'react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'


export const Movie = (props) => {
    return (
        <div>
            <LikeButton />
            <ul key={props.movie.id} >
                  {props.movie.name} ({props.movie.kind}) 
            </ul>
            <DeleteButton movie={props.movie}/>
        </div>
    )
}

export default Movie

