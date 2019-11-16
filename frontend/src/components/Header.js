import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
// import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="App-header">
      {/* <NavLink exact activeClassName */}
      <div className="subnav">
      <NavLink exact activeClassName="active" to="/" style={{ textDecoration: 'none'}}>
        profile
      </NavLink>
      </div>
      <p>YEETOUT</p>
      <div className="subnav">
      <NavLink exact activeClassName="active" to="/createactivity" style={{ textDecoration: 'none' }}>
        +
      </NavLink>
      </div>
    </nav>
  //   <header>
  //   <div className="App-header">
  //     <h1>YEETOUT</h1>
  //     <Link to="/createactivity">+</Link>
  //   </div>
  // </header>
  );
}
export default Header;