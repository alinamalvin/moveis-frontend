import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class LikeButton extends Component {

state = {count: 0}

toastStyle = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

handleChange = () => {
//   toast.success("");
  toast.success('🦄 Liked!', this.toastStyle);
  let newLike = this.state.count +1
  this.setState({
      count: newLike
  })
}

    render() {
        return (
            <div>
               <button onClick={this.handleChange} type="button" class="btn btn-outline-secondary">❤️ Likes: {this.state.count}</button>
               <ToastContainer/>
            </div>
        )
    }
}
