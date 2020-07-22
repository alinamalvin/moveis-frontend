import React from 'react'
import Account from './Account'
import {Link} from 'react-router-dom'
import LikeButton from './LikeButton'

const Accounts = (props) => {
    console.log(props)
    return (
        <div>
           {props.accounts.map(account => 
           <ul key={account.id}>
               <Link to={`/accounts/${account.id}`}><h3>{account.name}</h3></Link><LikeButton />
            </ul>)}
        </div>
    )
}

export default Accounts;