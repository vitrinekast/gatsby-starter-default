import React from "react"

const Image = ({ src, label, mimeType }) => {
  const isImage = mimeType.indexOf("image") !== -1
  return (
    <li className="list__item--images ">
      {isImage && <img loading="lazy" src={src} className="media--fit" />}
      {!isImage && (
        <video loading="lazy"  className="media--fit">
          <source src={src} type={mimeType} />
        </video>
      )}

      <label className="list__item__label">
        <a href={src} target="_blank">
          {label}
        </a>
      </label>
    </li>
  )
}

export default Image
