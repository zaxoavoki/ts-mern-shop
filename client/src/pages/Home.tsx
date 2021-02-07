import React from "react";
import faker from "faker";
import PostCard from "../components/product/ProductCard";
import { Link } from "react-router-dom";

export default function Home(): React.ReactElement {
  return (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="list-group mb-3">
          {Array.from({ length: 10 }).map((e, i) => {
            return (
              <Link key={i} to="/category" className="list-group-item list-group-item-action">
                {faker.lorem.word()}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="col-md-8 col-lg-9">
        <h5>Recent products</h5>
        <div className="row g-3">
          {Array.from({ length: 10 }).map((e, i) => {
            return (
              <div key={i} className="col-12 col-sm-6 col-lg-3">
                <PostCard
                  title={faker.commerce.productName()}
                  description={faker.commerce.productDescription()}
                  image={faker.image.image()}
                  price={faker.random.float()}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
