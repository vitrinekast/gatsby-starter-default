import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const gridBlock = ({ title, media }) => {
  const img = media[0];
  return (
    <div>
      <img src={img.url} />
    </div>
  )
}

gridBlock.propTypes = {
  title: PropTypes.string,
  media: PropTypes.array
}

gridBlock.defaultProps = {
  title: ``,
  media: []
}

export default gridBlock
