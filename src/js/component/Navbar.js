import React from "react";

const Navbar = () => {
	return (
    		<div class="container-fluid">
		<nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbarbox">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#" id="logo">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex flex-row-reverse bd-highlight" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto" id="menu">
        <li className="nav-item active">
          <a className="nav-link active nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled nav-link text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
	);
};

export default Navbar