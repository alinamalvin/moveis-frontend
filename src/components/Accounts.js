import React from 'react'

const Accounts = (props) => {
    console.log(props)
    return (
        <div>
           {props.accounts.map(account => <ul key={account.id}>{account.name}</ul>)}
        </div>
    )
}

export default Accounts;