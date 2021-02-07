import React from "react";
import faker from "faker";
import ProductCard from "../components/product/ProductCard";

export default function Category(): React.ReactElement {
  return (
    <div className="row">
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            <form>
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input type="range" className="form-range" min="0" max="50000" step="1" id="price" />
              <button className="btn btn-sm btn-primary float-end mt-4">Apply filters</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-9">
        <h3 className="mb-4">
          <span className="text-black-50">Category: </span>
          {faker.lorem.word()}
        </h3>
        <div className="row g-3">
          {Array.from({ length: 23 }).map((e, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-3" key={i}>
                <ProductCard
                  title={faker.commerce.productName()}
                  description={faker.commerce.productDescription()}
                  price={faker.random.float()}
                  image={faker.image.image()}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
