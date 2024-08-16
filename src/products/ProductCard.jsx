import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    productId,
    productName,
    price,
    category,
    productCode,
    description,
    starRating,
  } = product;
  return (
    <div className="card m-2" style={{ width: 18 + "rem" }}>
      <img
        className="card-img-top mt-3"
        src="https://picsum.photos/286/180"
        alt={productName}
      />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <h6 className="card-title">₹ {price}</h6>
        <span className="badge text-bg-secondary">{category}</span>
        <span className="m-1 badge text-bg-primary">{productCode}</span>
        <span>
          <FaStar width={10} height={10} /> {starRating}
        </span>
        <p className="card-text">{description}</p>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = `/products/${productId}`)}
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
