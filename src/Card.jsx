import React from 'react';
import PropTypes from 'prop-types'


const Card = ({ imgName, img, onClickCard, indexKey }) => (
  <div className="card" onClick={() => { onClickCard({ imgName, indexKey }) }}>
    <img src={img} alt="game board card" />
  </div>
)

Card.propTypes = {
  imgName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClickCard: PropTypes.func.isRequired,
  indexKey: PropTypes.number.isRequired,
}

export default Card
