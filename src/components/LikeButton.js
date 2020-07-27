import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class LikeButton extends Component {

state = {
    count: 'Like',
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
                count: '❤️',
                updated: true
            };
        });
        toast.success('🦄 Liked!', this.toastStyle);
    } else {
        this.setState((prevState) => {
            return {
                count: 'Like',
                updated: false
            };
        });
    }
}

    render() {
        return (
            <div>
               <button 
               onClick={this.handleChange} 
               type="button" 
               class="btn btn-outline-secondary" 
               style={{border: 0}}>
                   {this.state.count} 
                </button>
               <ToastContainer/>
            </div>
        )
    }
}
