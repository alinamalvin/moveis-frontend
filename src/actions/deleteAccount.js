export const deleteAccount = (accountId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/accounts/${accountId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(accounts => dispatch({type: 'DELETE_ACCOUNT', payload: accounts}))
    }
}
