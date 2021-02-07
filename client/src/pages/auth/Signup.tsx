import React, { useState } from "react";

export default function Signup(): React.ReactElement {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  async function signup(e: React.FormEvent) {
    e.preventDefault();

    const res = await (await fetch(`${process.env.REACT_APP_API_URL}/signup`, {})).json();
    console.log(res);
  }

  return (
    <div className="d-flex h-100 align-items-center row">
      <div className="col-12 col-sm-8 col-md-5 col-lg-3 mx-auto">
        <h3 className="mb-4 fw-bolder">Create account</h3>

        <form onSubmit={signup}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={data.name}
              onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
              type="text"
              className="form-control"
              id="name"
              placeholder="John Doe"
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="password-confirmation" className="form-label">
              Password confirmation
            </label>
            <input
              value={data.password_confirmation}
              onChange={(e) => setData((p) => ({ ...p, password_confirmation: e.target.value }))}
              type="password"
              className="form-control"
              id="password-confirmation"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="small">
              Have an account?
            </a>
            <button type="submit" className="btn btn-primary float-end">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
