import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

const Header = () => {
  const [title, setTitle] = useState(false)

  useEffect(() => {
    setTitle(window.location.pathname)
  }, [title])

  return (
    <header className="header--main">
      <h1 className="header__title">
        Index of
        {title && <Link to={title}> {title}</Link>}
      </h1>
    </header>
  )
}

export default Header
