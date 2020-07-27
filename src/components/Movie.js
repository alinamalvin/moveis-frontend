import React from 'react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'


export const Movie = (props) => {

    let style = {
        display: 'inline-block'
    }

    return (
        <div>
            <div style={style}><LikeButton /></div>
            <div style={style}>
            <h5>
                <ul key={props.movie.id} >
                  {props.movie.name} (genre: {props.movie.kind})
                </ul>
            </h5>
            </div>
            <div style={style}>
            <DeleteButton />
            </div>
        </div>
    )
}

export default Movie

