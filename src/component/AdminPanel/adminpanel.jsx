import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminpanel.css";

function AdminPanel() {
    const loggedUser = useSelector((state)=> state.adminLoginReducer.loginUserDetails)
    console.log(loggedUser, "user")
    return (
    <>
      <nav className="navbar text-light bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Welcome {loggedUser.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Trainee
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
      
    </>
  );
}

export default AdminPanel;
