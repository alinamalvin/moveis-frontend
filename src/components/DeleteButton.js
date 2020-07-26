import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'

class DeleteButton extends Component {

    handleDelete = (movie) => {
        this.props.deleteMovie(movie.id, movie.account_id)
    }

    render() {
        return (
            <div>
                <button type="button" 
                          class="btn btn-outline-danger"
                          onClick={() => this.handleDelete(this.props.movie)}>
                              Delete
                   </button>
            </div>
        )
    }
}

export default connect(null, {deleteMovie}) (DeleteButton)
