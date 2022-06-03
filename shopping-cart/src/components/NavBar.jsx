import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="https://getbootstrap.com/">
            Shopping Cart
            <span className="badge m-2 bg-secondary bd-pill">
              {this.props.totalCounter}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
