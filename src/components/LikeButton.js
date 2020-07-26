import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class LikeButton extends Component {

state = {
    count: 0,
    updated: false
}

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
    if(!this.state.updated) {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
                updated: true
            };
        });
    } else {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
                updated: false
            };
        });
    }
}
//   toast.success('🦄 Liked!', this.toastStyle);
//   let newLike = this.state.count +1
//   this.setState({
//       count: newLike
//   })


    render() {
        return (
            <div>
               <button onClick={this.handleChange} type="button" class="btn btn-outline-secondary">❤️ Likes: {this.state.count}</button>
               <ToastContainer/>
            </div>
        )
    }
}
