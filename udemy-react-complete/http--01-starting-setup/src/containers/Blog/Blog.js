import React, { Component } from 'react'
import axios from 'axios'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
  state = {
    posts: [],
    fullPostId: null,
    postsLoadError: false
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

  updateFullPost = id => {
    this.setState({ fullPostId: id })
  }

  render() {
    let posts = <p>"Something went wrong while loading the posts"</p>
    if (!this.state.postsLoadError) {
      posts = this.state.posts.map(elem => (
        <Post
          title={elem.title}
          key={elem.id}
          author={elem.author}
          onClick={() => this.updateFullPost(elem.id)}
        />
      ))
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.fullPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
