export const deleteMovie = (movieId, accountId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/accounts/${accountId}/movies/${movieId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(account => dispatch({type: 'DELETE_MOVIE', payload: account}))
    }
}
