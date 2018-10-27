import React from 'react'
import PropTypes from 'prop-types'

const Prompt = ({ pInput, onInput }) => (
  <div className="prompt">
    <div className="label">Memory Game</div>
    <form>
      <div className="radio">
        <label id="lbl" htmlFor="Easy">
          <input
            id="Easy"
            type="radio"
            value="4"
            checked={parseInt(pInput, 10) === 4}
            onChange={(event) => { onInput(parseInt(event.target.value, 10)) }}
          />
        Easy 2x4
        </label>
      </div>
      <div className="radio">
        <label id="lbl" htmlFor="Medium">
          <input
            id="Medium"
            type="radio"
            value="8"
            checked={parseInt(pInput, 10) === 8}
            onChange={(event) => { onInput(parseInt(event.target.value, 10)) }}
          />
        Medium 4x4
        </label>
      </div>
      <div className="radio">
        <label id="lbl" htmlFor="Hard">
          <input
            id="Hard"
            type="radio"
            value="16"
            checked={parseInt(pInput, 10) === 16}
            onChange={(event) => { onInput(parseInt(event.target.value, 10)) }}
          />
        Hard 4x8
        </label>
      </div>
    </form>
  </div>
)
Prompt.propTypes = {
  pInput: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
}

export default Prompt
