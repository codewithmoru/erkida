import React from "react";
export default function header() {
  return (
   <div className="m-2">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid ">
            <a href="#" className="navbar-brand">
              <img src="https://i.ibb.co/7YBDmgk/logo-modified.png" height={28} alt="CoolBrand" /> Er-Kida
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#services" className="nav-item nav-link active">Services</a>
                <a href="#client" className="nav-item nav-link active">Clints</a>
                <a href="#contact" className="nav-item nav-link active">Contact</a>
              </div>
             
            </div>
          </div>
        </nav>
      </div>
  );
}
