import React from 'react'

export const addMovie = (movie, accountId) => {
    return (dispatch) => {
       fetch(`http://localhost:3000/accounts/${accountId}/movies`,{
           method: 'POST', 
           headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify(movie)
       })
       .then(resp => resp.json())
       .then(account => dispatch({type: 'ADD_MOVIE', payload: account}))
    }
}
