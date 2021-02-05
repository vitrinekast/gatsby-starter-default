import { Link } from "gatsby"
import React from "react"

const Image = ({ src, label }) => {
  return (
    <li className="list__item--images ">
      <img src={src} className="media--fit" />

      <label className='list__item__label'><a href={src} target="_blank">{label}</a></label>
    </li>
  )
}

export default Image
