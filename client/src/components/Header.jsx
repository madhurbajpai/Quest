import React from 'react'

const Header = () => {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <style>
        {`
          .navbar .navbar-nav .nav-item a {
            padding: 20px;
            font-family: sellena-brush-font;
          }
          .navbar .navbar-nav .nav-but {
            padding: 5px;
          }
          
        `}
      </style>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Navbar</title>
    </head>
    <body>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img  src="brain.png" alt="Logo" width="55" height="54" className="d-inline-block align-text-top" />
           
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

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </body>
  </html>
  )
}

export default Header
