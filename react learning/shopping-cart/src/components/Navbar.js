import React from 'react'

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand text-white" href="www.google.com" >
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
