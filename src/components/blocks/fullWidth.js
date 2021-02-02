import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const fullWidthBlock = ({ title, media }) => {
  const img = media[0];
  return (
    <div>
      <h3>{title}</h3>
      <img className='media--fit' src={img.url} />
    </div>
  )
}

fullWidthBlock.propTypes = {
  title: PropTypes.string,
  media: PropTypes.array
}

fullWidthBlock.defaultProps = {
  title: ``,
  media: []
}

export default fullWidthBlock
