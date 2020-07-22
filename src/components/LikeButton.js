import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class LikeButton extends Component {

state = {count: 0}

handleChange = () => {
  toast("Liked!");
  let newLike = this.state.count +1
  this.setState({
      count: newLike
  })
}

    render() {
        return (
            <div>
               <button onClick={this.handleChange} type="button" class="btn btn-outline-secondary">❤️ Likes: {this.state.count}</button>
               <ToastContainer
                   position="top-right"
                   autoClose={5000}
                   hideProgressBar={false}
                   newestOnTop={false}
                   closeOnClick
                   rtl={false}
                   pauseOnFocusLoss
                   draggable
                   pauseOnHover
                />
               <ToastContainer />
            </div>
        )
    }
}
