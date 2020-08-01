import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  users: userReducer,
  accounts: accountReducer
});

export default rootReducer;

function accountReducer(state = {accounts: []}, action) {
    console.log(12)
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
           return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'DELETE_ACCOUNT':
             return {accounts: [...state.accounts]}
        case 'ADD_MOVIE':
            let accounts = state.accounts.map(account =>  {
                if (account.id === action.payload.id) {
               return action.payload 
                } else {
                    return account
                }
            })
            return {...state, accounts: accounts}
        case 'DELETE_MOVIE':
            let accountsTwo = state.accounts.map(account =>  {
                if (account.id === action.payload.id) {
               return action.payload 
                } else {
                    return account
                }
            })
            return {...state, accounts: accountsTwo}
        default:
            return state 
    }
}
  
function userReducer(state = {currentUser: []}, action) {
    switch (action.type) {
        case 'LOGIN_USER':
           return {...state, currentUser: action.payload}
        case 'LOGOUT_USER':
            return {...state, currentUser: {} }
        default:
           return state;
    }
}



