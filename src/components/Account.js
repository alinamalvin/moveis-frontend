import React from 'react'

const Account  = (props) => {
    console.log(props)

    let account = props.accounts[props.match.params.id - 1]

    return (
        <ul>
           {account ? account.name : null}
        </ul>
    )
}

export default Account;