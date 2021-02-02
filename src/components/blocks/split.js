import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const gridBlock = ({ title, media }) => {

  return (
    <div>
      <h3>{title}</h3>
      <ul className='list--split'>
        {media.slice(0, 2).map((item, index) => {
          return (
            <li className='list__item' key={index}>
              <img className='media--fit' src={item.url} />
            </li>
          )
        })}
      </ul>
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
