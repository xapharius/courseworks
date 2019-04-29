import React, { Component } from 'react'
import axios from 'axios'

import './FullPost.css'

class FullPost extends Component {
  state = {
    post: null
  }

  fetchPost = id => {
    axios.get('posts/' + id).then(resp => {
      this.setState({ post: resp.data })
    })
  }

  deletePost = id => {
    axios.delete('/posts/' + id).then(resp => console.log(resp))
  }

  componentDidUpdate = () => {
    if (this.props.id) {
      if (
        !this.state.post ||
        (this.state.post && this.state.post.id !== this.props.id)
      ) {
        this.fetchPost(this.props.id)
      }
    }
  }

  render() {
    let post = 'Loading Post...'
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.deletePost(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost
