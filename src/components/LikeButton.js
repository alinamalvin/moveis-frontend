import React, { Component } from 'react'

export default class LikeButton extends Component {

state = {count: 0}

handleChange = () => {
  let newLike = this.state.count +1
  this.setState = {
      count: newLike
  }
}


    render() {
        return (
            <div>
    <button onClick={this.handleChange}>Like Me {this.state.count}</button>
            </div>
        )
    }
}
