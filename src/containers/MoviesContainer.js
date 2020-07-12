import React, { Component } from 'react'
import MovieInput from '../components/MovieInput'
import Movies from '../components/Movies'
import Account from '../components/Account';

class MoviesContainer extends Component {

    render() {
        return (
            <div>
                <MovieInput account={this.props.account}/>
                <Movies movies={this.props.account && this.props.account.movies}/>
            </div>
        )
    }
}

export default MoviesContainer;
