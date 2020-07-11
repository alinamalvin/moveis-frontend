import React from 'react'
import Account from './Account'

const Accounts = (props) => {
    console.log(props)
    return (
        <div>
           {props.accounts.map(account => 
           <ul key={account.id}><Account account={account}/></ul>)}
        </div>
    )
}

export default Accounts;