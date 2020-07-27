import React from 'react'
import Account from './Account'
import {Link} from 'react-router-dom'
import LikeButton from './LikeButton'

const Accounts = (props) => {

    let style = {
        display: 'inline-block'
    }

    return (
        <div>
            <div>
                {props.accounts.map(account => 
                    <ul key={account.id}>
                       <div style={style}>
                           <LikeButton />
                        </div> 
                       <div style={style}>
                           <Link to={`/accounts/${account.id}`}>
                           <h3>{account.name}</h3>
                            </Link>
                        </div> 
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Accounts;