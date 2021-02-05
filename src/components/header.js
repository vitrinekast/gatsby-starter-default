import { Link } from "gatsby";
import React from "react";

const Header = ({title}) => {

  return (

    <header className='header--main'>
      <h1 className='header__title'>
        Index of <Link to={window.location.pathname}> {window.location.pathname}</Link>
      </h1>
    </header>
  )
};



export default Header
