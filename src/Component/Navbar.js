import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand logo" to="/"> <img src="https://raischool.edu.np/img/railogo.png" alt="logo" classNameName='image-fluid' /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-auto mylist" id="navbarSupportedContent">
                        <div className=" mb-1 ms-auto">
                            <NavLink to="/" target="_blank">
                                <i className="fab fa-facebook"></i>
                            </NavLink>
                        </div>
                        <div className=" mb-1 ms-auto">
                            <span className="top-location">
                                <i className="fa fa-map-marker-alt"></i>Naxal ( Near Balmandir Compound ), Kathmandu
                            </span>
                        </div>
                        <div className="mb-1 ms-auto">
                            <span className="top-call">
                                <i className="fa fa-phone-volume"></i>+977-9801966967, 01-4510436 / 4437537
                            </span>
                        </div>
                        <div className="mymenu">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link actives" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/NewsEvents">News & Events</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Academics"> Academics</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Bacademics">Beyond Academics</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Calender">Calender</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Admission">Admission</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Student">Student</NavLink>
                                </li>


                            </ul>
                        </div>


                    </div>
                </div>

            </nav>


        </>
    )
}

export default Navbar
