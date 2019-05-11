import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Link } from 'react-router-dom'

class Posts extends Component {
  state = {
    posts: []
    // fullPostId: null,
    // postsLoadError: false
  }

  updateFullPost = id => {
    this.setState({ fullPostId: id })
  }

  componentDidMount() {
    axios
      .get('posts')
      .then(resp => {
        const posts = resp.data.slice(0, 4) // Dont want all posts, process only first 4
        const updatedPosts = posts.map(elem => {
          return { ...elem, author: 'max' }
        }) // transform by adding an author field by deconstructing existing dict
        this.setState({ posts: updatedPosts, fullPostId: updatedPosts[0].id })
      })
      .catch(error => {
        //console.log(error)
        this.setState({ postsLoadError: true })
      })
  }
  render() {
    let posts = <p>"Something went wrong while loading the posts"</p>
    if (!this.state.postsLoadError) {
      posts = this.state.posts.map(elem => (
        <Link to={'/' + elem.id} key={elem.id}>
          <Post
            title={elem.title}
            author={elem.author}
            onClick={() => this.updateFullPost(elem.id)}
          />
        </Link>
      ))
    }

    return <section className="Posts">{posts}</section>
  }
}

export default Posts
