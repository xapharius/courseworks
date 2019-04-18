import React, { Component } from 'react'
import './App.css'
import { UserInput } from './components/UserInput/UserInput'
import { UserOutput } from './components/UserOutput/UserOutput'

class App extends Component {
  state = {
    users: [{ username: 'user1' }, { username: 'user2' }]
  }

  changeUsernameHandler = e => {
    this.setState({
      users: [{ username: e.target.value }, { username: 'user2' }]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.users[0].username}
          changeUsername={this.changeUsernameHandler}
        />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
      </div>
    )
  }
}

export default App
