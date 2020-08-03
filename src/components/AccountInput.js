import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends Component {

    state = {name: ''}

    handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value ,
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: ''
        })

        this.props.history.push('/accounts');
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Account Name:</label>
                   <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}></input>
                   <input type="submit" class="btn btn-outline-success" ></input>
               </form>
            </div>
        )
    }
}

const  mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser
    }
}  

export default connect(mapStateToProps, {addAccount}) (AccountInput)
