import React from 'react'
import {Redirect} from 'react-router-dom'
import MoviesContainer from '../containers/MoviesContainer'
import {connect} from 'react-redux'
import {deleteAccount} from '../actions/deleteAccount'


const Account  = (props) => {
    console.log(props)

    // let account = props.accounts[props.match.params.id - 1]
    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

    const handleDelete = (account) => {
        props.deleteAccount(account.id)
        window.alert("List is deleted!");
        props.history.push('/');
    }

    return (
        <div>
        <h2>
           {account ? account.name : null}
        </h2>
        <MoviesContainer account={account}/>
        <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(account)}>Delete</button>
        </div>
    )
}

export default connect(null, {deleteAccount})(Account)
