import React from "react";

export default function Account(): React.ReactElement {
  return (
    <>
      <h4 className="mb-4 text-secondary">
        Change e-mail <span className="fs-6 badge bg-primary">test@gmail.com</span>
      </h4>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            New e-mail
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button className="btn btn-outline-primary">Set up new e-mail</button>
      </form>

      <hr className="bg-secondary my-5" />

      <h4 className="mb-4 text-secondary">
        Change name <span className="fs-6 badge bg-primary">John Doe</span>
      </h4>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            New name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <button className="btn btn-outline-primary">Change name</button>
      </form>
    </>
  );
}
