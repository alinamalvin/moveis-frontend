import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addMovie } from '../actions/addMovie'

class MovieInput extends Component {

    state = {
        name: '',
        kind: 'horror'
    }

    handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleSubmit = (event) => {
       event.preventDefault() 
       this.props.addMovie(this.state, this.props.account.id)
       this.setState({
        name: '',
        kind: 'horror'
       })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Movie Name:</label>
                   <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                   <label>Movie Genre:</label>
                   <select name='kind' value={this.state.kind} onChange={this.handleChange}>
                       <option>horror</option>
                       <option>comedy</option>
                       <option>thriller</option>
                       <option>detective</option>
                       <option>documentary</option>
                       <option>other</option>
                   </select>
                   <input type='submit'/>
               </form>
            </div>
        )
    }
}

export default connect(null, {addMovie}) (MovieInput);
