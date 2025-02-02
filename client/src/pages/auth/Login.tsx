import React, { useState } from "react";

export default function Login(): React.ReactElement {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function login(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="d-flex h-100 align-items-center row">
      <div className="col-12 col-sm-8 col-md-5 col-lg-3 mx-auto">
        <h3 className="mb-4 fw-bolder">Log in</h3>

        <form onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              value={data.email}
              onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={data.password}
              onChange={(e) => setData((p) => ({ ...p, password: e.target.value }))}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="small">
              Forgot password?
            </a>
            <button type="submit" className="btn btn-primary float-end">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
