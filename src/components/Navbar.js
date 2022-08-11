import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../img/NA_logo.png"

export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark nav-image shadow-sm">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={logo} alt='logo' height={50} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link className="nav-link text-white text-opacity-75" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white text-opacity-75" to="/About">About</Link>
                                </li>
                                {/* news section */}
                                <li className="dropdown nav-item">
                                    <span className="dropdown-toggle nav-link text-white text-opacity-75" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        News
                                    </span>
                                    <ul className="dropdown-menu bg-dark color-white" aria-labelledby="dropdownMenuButton1">
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/business">Business</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/general"> General</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/health">Health </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/science"> Science </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/sports">Sports </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/technology"> Technology </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex ">
                                <input className="form-control me-2  opacity-75" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default Navbar
