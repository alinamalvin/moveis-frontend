import React from 'react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'


export const Movie = (props) => {
    return (
        <div>
            <div style={{display: 'inline-block'}}><LikeButton /></div>
            <div style={{display: 'inline-block'}}>
            <h5>
                <ul key={props.movie.id} >
                  {props.movie.name} (genre: {props.movie.kind})
                </ul>
            </h5>
            </div>
            <div style={{display: 'inline-block'}}>
            <DeleteButton movie={props.movie}/>
            </div>
        </div>
    )
}

export default Movie

