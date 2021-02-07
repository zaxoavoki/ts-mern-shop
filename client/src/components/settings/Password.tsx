import React from "react";

export default function Password(): React.ReactElement {
  return (
    <>
      <h4 className="mb-4 text-secondary">Change password</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="old-password" className="form-label">
            Old password
          </label>
          <input type="password" className="form-control" id="old-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="new-password" className="form-label">
            New password
          </label>
          <input type="password" className="form-control" id="new-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="new-password-confirmation" className="form-label">
            Confirm new password
          </label>
          <input type="password" className="form-control" id="new-password-confirmation" />
        </div>
        <button type="submit" className="btn btn-outline-primary float-end">
          Update password
        </button>
      </form>
    </>
  );
}
