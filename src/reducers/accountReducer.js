export default function accountReducer(state = {accounts: []}, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
           return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'DELETE_ACCOUNT':
             return {accounts: [...state.accounts]}
            //  let accountsThree = state.accounts.map(account =>  {
            //      if (account.id === action.payload.id) {
            //          return action.payload 
            //      } else {
            //          return account
            //          }
            //      })
            //      return {...state, accounts: accountsThree}
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