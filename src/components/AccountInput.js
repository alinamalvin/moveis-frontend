import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends Component {

    state = {name: ''}

    handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value 
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(4)
        this.props.addAccount(this.state)
        console.log(5)
        this.setState({
            name: ''
        })

        this.props.history.push('/accounts');
        console.log(6)
    }

    render() {
        console.log(7)
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

export default connect(null, {addAccount}) (AccountInput)
