export default function fetchAccounts(action) {
    return (dispatch) => {
        fetch('http://localhost:3000/accounts')
        .then(resp => resp.json())
        .then(accounts => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: accounts
        })) 
    }    
}