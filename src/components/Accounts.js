import React from 'react'
import Account from './Account'
import {Link} from 'react-router-dom'

const Accounts = (props) => {
    console.log(props)
    return (
        <div>
           {props.accounts.map(account => 
           <ul key={account.id}>
               <Link to={`/accounts/${account.id}`}>{account.name}</Link>
            </ul>)}
        </div>
    )
}

export default Accounts;