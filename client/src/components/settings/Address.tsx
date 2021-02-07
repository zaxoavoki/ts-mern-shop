import React from "react";
import faker from "faker";

export default function Address(): React.ReactElement {
  return (
    <div className="row g-3 d-flex align-items-stretch">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="btn btn-outline-primary rounded-pill px-4 w-100 align-left text-start h-100 d-flex align-items-center">
          <div className="p-3 d-flex align-items-center my-auto">
            <i className="bi bi-plus-circle-dotted me-3" />
            <p className="m-0">Add new address</p>
          </div>
        </div>
      </div>

      {Array.from({ length: 5 }, () => (
        <div className="col-12 col-md-6 col-lg-4 flex-grow">
          <div className="border btn w-100 align-left text-start h-100">
            <div className="p-3 text-truncate">
              <h5 className="mb-1">{faker.address.streetAddress()}</h5>
              <p className="m-0 text-muted small">
                {faker.address.city()}, {faker.address.country()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
