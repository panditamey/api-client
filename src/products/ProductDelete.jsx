import React from "react";
import { deleteById } from "../services/productApiService";

const ProductDelete = ({ id }) => {
  const deleteHandler = async (id) => {
    let res = await deleteById(id);
    console.log(res);
    window.location.href = "/products";
  };
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        deleteHandler(id);
      }}
    >
      Delete
    </button>
  );
};

export default ProductDelete;
