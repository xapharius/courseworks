import React, { Component } from 'react'
import './App.css'
import { person as Person } from './Components/Person/Person'

class App extends Component {
  state = {
    persons: [{ id: '1', name: 'Alice' }, { id: '2', name: 'Bob' }],
    showPersons: false
  }

  toggleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  changePersonNameHandler = (id, name) => {
    const p_ix = this.state.persons.findIndex(p => p.id === id)
    const person = { ...this.state.persons[p_ix] }
    person.name = name
    const persons = [...this.state.persons]
    persons[p_ix] = person
    this.setState({ persons: persons })
  }

  deletePersonHandler = index => {
    // have to copy the state first, not good to mutate actual state object
    const new_persons = [...this.state.persons]
    new_persons.splice(index, 1)
    this.setState({ persons: new_persons })
  }

  render() {
    var persons = null
    if (this.state.showPersons)
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changeName={event =>
                  this.changePersonNameHandler(person.id, event.target.value)
                }
              />
            )
          })}
        </div>
      )

    return (
      <div className="App">
        <h1>Some title</h1>
        <button onClick={this.toggleShowPersons}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App
