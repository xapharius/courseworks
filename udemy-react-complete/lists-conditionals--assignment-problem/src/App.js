import React, { Component } from 'react'
import './App.css'
import { Input } from './components/Input/Input'
import { Validator } from './components/Validator/Validator'
import { CharComponent } from './components/CharComponent/CharComponent'

class App extends Component {
  state = {
    text: [...'Enter text here']
  }

  changeTextHandler = event => {
    this.setState({ text: [...event.target.value] })
  }

  changeChar = (event, index) => {
    const text = [...this.state.text]
    text[index] = event.target.value
    this.setState({ text: text })
  }

  deleteChar = index => {
    const text = [...this.state.text]
    text.splice(index, 1)
    this.setState({ text: text })
  }

  render() {
    const chars = this.state.text.map((char, index) => {
      return (
        <CharComponent
          char={char}
          change={event => this.changeChar(event, index)}
          delete={() => this.deleteChar(index)}
        />
      )
    })

    return (
      <div className="App">
        <Input text={this.state.text} changeText={this.changeTextHandler} />
        <Validator text={this.state.text} />
        <div>{chars}</div>

        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    )
  }
}

export default App
