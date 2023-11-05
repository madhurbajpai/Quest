import React from 'react'

const Header = () => {
  return (
    <div className="header-main">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./img/brain.png" alt="Logo" width="50" height="54" className="d-inline-block align-text-top" />
            Quest
          </a>
        </div>
     
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-but">
            <a className="btn btn-outline-light" href="#">Signup</a>
          </li>
          <li className="nav-but">
            <a className="btn btn-outline-light" href="#">Signin</a>
          </li>
      </ul>
      </nav>
    </div>
  )
}

export default Header