import React from "react";
import faker from "faker";
import { Link } from "react-router-dom";

export default function Header(): React.ReactElement {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white mb-4 sticky-top">
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
          <div className="dropdown">
            <li className="btn me-3" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-cart2 align-baseline me-1" />
              <span className="badge rounded-pill bg-primary fw-light">0</span>
            </li>

            <ul id="cart-dropdown" className="p-0 dropdown-menu dropdown-menu-end overflow-auto">
              <li className="py-3">
                <a href="#" className=" btn btn-primary w-50 py-2 text-center mx-auto d-block">
                  <i className="bi bi-wallet2" /> Buy
                </a>
              </li>
              {Array.from({ length: 50 }, () => (
                <li key={faker.random.number()} className="border-bottom px-3 py-2">
                  <div className="small text-truncate">
                    {faker.random.number(10)} of{" "}
                    <a href="#" className="text-decoration-none">
                      {faker.commerce.productName()}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="nav-item d-flex align-items-center dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <a className="nav-link" href="#">
                John Doe
              </a>
            </li>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="/settings/account" className="dropdown-item">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/login" className="dropdown-item">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="dropdown-item">
                  Sign up
                </Link>
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
                <hr className="dropdown-divider bg-secondary" />
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
