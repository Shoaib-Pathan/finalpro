import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <NavLink className="nav-link active" aria-current="page" to="/add">Add Vendor</NavLink> */}
        <NavLink className="nav-link" to="/show">Show Vendor</NavLink>
        {/* <NavLink className="nav-link" to="/installments">Add Installments</NavLink> */}
        <NavLink className="nav-link" to="/show1">Show Installments</NavLink>
        {/* <NavLink className="nav-link" to="/disburs">Add Disbursement</NavLink> */}
        <NavLink className="nav-link" to="/showdisburs">Show Disbursement</NavLink>
        <NavLink className="nav-link" to="/showloan">Show Loan</NavLink>
        <NavLink className="nav-link" to="#">Sign-up</NavLink>
        <NavLink className="nav-link" to="#">Login</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar