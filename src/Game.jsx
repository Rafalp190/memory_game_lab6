import React from 'react'
import Prompt from './Prompt.jsx'
import Card from './Card.jsx'
import './memoryStyle.css'

function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue = 0
  let randomIndex = 0

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      gameSize: 0,
      selectedCard1: 0,
      selectedCard2: 0,
      boardList: [],
      victory: 0,
    }
    this.imageList = [{ name: 'ciri', flip: 0 }, { name: 'dandelion', flip: 0 }, { name: 'dragon', flip: 0 }, { name: 'geralt', flip: 0 }, { name: 'igni', flip: 0 }, { name: 'isengrim', flip: 0 }, { name: 'kambi', flip: 0 }, { name: 'miruna', flip: 0 }, { name: 'ragnarok', flip: 0 }, { name: 'regis', flip: 0 }, { name: 'roche', flip: 0 }, { name: 'sabbath', flip: 0 }, { name: 'saskia', flip:0 }, { name: 'shani', flip: 0 }, { name: 'sihil', flip: 0 }, { name: 'triss', flip: 0 }, { name: 'yen', flip: 0 }, { name: 'yrden', flip: 0 }]
    this.boundHandleInputChange = this.handleInputChange.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleInputChange(value) {
    const tempBoard = shuffle(this.imageList)
    const newBoard = []
    for (let i = 0; i < value; i += 1) {
      newBoard.push(tempBoard[i])
      newBoard.push(tempBoard[i])
    }

    this.setState({
      gameSize: value,
      boardList: JSON.parse(JSON.stringify(shuffle(newBoard))),
    })
  }

  handleCardClick(value) {
    let selection = 0
    if (this.state.selectedCard1 === 0) {
      const tempBoard = this.state.boardList
      tempBoard[value.indexKey].flip = 1
      this.setState({
        selectedCard1: value.imgName,
        boardList: tempBoard,
      })
    } else {
      const tempBoard = this.state.boardList
      tempBoard[value.indexKey].flip = 1
      this.setState({
        selectedCard2: value.imgName,
      })
      selection = value.imgName
    }
    this.verifyScore(selection, value)
  }

  verifyScore(selection) {
    if (this.state.selectedCard1 === selection && this.state.selectedCard1 !== 0) {
      let victoryCondition = 1
      for (const i in this.state.boardList) {
        if (this.state.boardList[i].flip === 0) {
          victoryCondition = 0
        }
      }
      this.setState({
        selectedCard1: 0,
        selectedCard2: 0,
        victory: victoryCondition,
      })
      setTimeout(() => {
        this.setState({
          victory: 0,
          gameSize: 0,
        })
      }, 10000)
    } else if (this.state.selectedCard1 !== selection && this.state.selectedCard1 !== 0) {
      const tempBoard = JSON.parse(JSON.stringify(this.state.boardList))
      for (const i in tempBoard) {
        if (tempBoard[i].name === selection || tempBoard[i].name === this.state.selectedCard1) {
          tempBoard[i].flip = 0
        }
      }
      setTimeout(() => {
        this.setState({
          selectedCard1: 0,
          selectedCard2: 0,
          boardList: tempBoard,
        })
      }, 800)
    }
  }

  render() {
    return (
      <div className="game">
        <div className={this.state.victory === 0 ? "victoryWindow.disabled" : "victoryWindow"} />
        <Prompt pInput={this.state.gameSize} onInput={this.boundHandleInputChange} />
        <div className="board">
            {this.state.boardList.map((c, index) => <Card key={index} indexKey={index} img={c.flip === 0 ? require('./images/back.png') : require(`./images/${c.name}.png`)} imgName={c.name} onClickCard={this.handleCardClick} />)}
        </div>
      </div>)
  }
}

export default Game
