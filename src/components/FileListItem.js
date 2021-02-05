/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Link } from "gatsby"
import React from "react"

const FileListItem = ({ isOpen, label, to }) => {
  
  const classes = `list__item--file ${isOpen ? "list__item--open" : ""} ${ label === "" || label === "/" ? "list__item--parent-link" : ""}`

  return (
    <li className={classes}>
      {isOpen && <React.Fragment>{label}.txt</React.Fragment>}
      {!isOpen && (
        <Link to={to}>
          {label === "" || label === "/" ? "Parent Directory" : label}
        </Link>
      )}
    </li>
  )
}

FileListItem.defaultProps = {
  isOpen: false,
  to: ``,
  label: ``,
}

export default FileListItem;