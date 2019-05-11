import React, { Component, Suspense } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import './Blog.css'
import Posts from './Posts/Posts'
const FullPost = React.lazy(() => import('./FullPost/FullPost'))
const NewPost = React.lazy(() => import('./NewPost/NewPost'))

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-post">New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact={true} component={Posts} />
          <Route
            path="/new-post"
            render={props => (
              <Suspense fallback={<div>Loading...</div>}>
                <NewPost {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/:id"
            exact={true}
            render={props => (
              <Suspense fallback={<div>Loading...</div>}>
                <FullPost {...props} />
              </Suspense>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Blog
