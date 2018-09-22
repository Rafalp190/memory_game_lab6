import React from 'react';
import PropTypes from 'prop-types'

const Card = ({ imgName }) => (
  <div className="card" onClick={(event) => {onClickCard(imgName) }}>
    <img src={imgName} alt="game board card" />
  </div>
)

Card.propTypes = {
  imgName: PropTypes.string.isRequired,
}

export default Card
