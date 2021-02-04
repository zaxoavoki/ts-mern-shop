import React from "react";
import { Link } from "react-router-dom";
import faker from "faker";

export default function Header(): React.ReactElement {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white mb-4">
            <div className="container d-flex justify-content-between">
                <div className="d-flex">
                    <Link className="navbar-brand fw-bold" to="/">
                        <i className="bi bi-bag-check"></i> Shop
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Find
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Categories
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav">
                    <div className="dropdown align-middle">
                        <li className="btn me-3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-cart2 align-baseline me-1" />
                            <span className="badge rounded-pill bg-primary fw-light">0</span>
                        </li>

                        <ul className="dropdown-menu" aria-labelledby="cartDropDown">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <li
                            className="nav-item d-flex align-items-center dropdown-toggle"
                            id="userDropDown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <a className="nav-link" href="#">
                                John Doe
                            </a>
                        </li>

                        <ul className="dropdown-menu" aria-labelledby="userDropDown">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Saved <span className="badge rounded-pill bg-primary fw-light">10</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Compare <span className="badge rounded-pill bg-primary fw-light">2</span>
                                </a>
                            </li>
                            <li>
                                <hr className="divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
