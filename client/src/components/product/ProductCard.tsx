import React from "react";

type Product = {
  title: string;
  description: string;
  image?: string;
  price: number;
};

export default function ProductCard({ title, description, image, price }: Product): React.ReactElement {
  return (
    <div className="card mb-2 h-100">
      <div className="card-img-top">
        <img className="w-100" src={image} alt="image" />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title fs-5">{price} $ </h6>
        <p className="card-subtitle mb-0">
          <a href="#" className="text-decoration-none text-muted mb-0">
            {title}
          </a>
        </p>
        <span className="mt-auto d-flex">
          <i className="fs-4 text-black-50 bi bi-basket3 me-auto"></i>
          <i className="fs-4 text-black-50 bi bi-bar-chart me-2" />
          <i className="fs-4 text-warning bi bi-heart " />
        </span>
      </div>
    </div>
  );
}
