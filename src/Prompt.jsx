import React from 'react'
import PropTypes from 'prop-types'

const Prompt = ({ pInput, onInput }) => (
  <div className="prompt">
    <div className="label">Tamaño del Tablero:</div>
    <input
      value={pInput}
      onChange={(event) => {
        const cardCount = event.target.value
        let cardCountNum = 4
        cardCountNum = parseInt(cardCount, 10)
        if (cardCount === '' || !isNaN(cardCountNum)) {
          onInput(cardCount === '' ? 0 : cardCountNum)
        }
      }}
    />
  </div>
)

Prompt.propTypes = {
  pInput: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
}

export default Prompt
