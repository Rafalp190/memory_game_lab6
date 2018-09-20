import React from 'react'
import Prompt from './Prompt.jsx'
import Card from './Card.jsx'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      gameSize: 4,
    }
    this.boundHandleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(value) {
    this.setState({
      gameSize: value,
    })
  }

  render() {
    return (
      <div className="game">
        <Prompt pInput={this.state.gameSize} onInput={this.boundHandleInputChange} />
        <Card />
      </div>)
  }
}

export default Game
