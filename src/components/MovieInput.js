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
                   <label><h4>Movie Name:&nbsp;</h4></label>
                   <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <label><h4>Movie Genre:&nbsp;</h4></label>
                   <select name='kind' value={this.state.kind} onChange={this.handleChange}>
                       <option>Horror</option>
                       <option>Comedy</option>
                       <option>Thriller</option>
                       <option>Detective</option>
                       <option>Documentary</option>
                       <option>Other</option>
                   </select>
                   <input type="submit" class="btn btn-outline-success"/>
               </form>
            </div>
        )
    }
}

export default connect(null, {addMovie}) (MovieInput);
