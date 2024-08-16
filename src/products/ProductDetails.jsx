import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productApiService";
import ProductDelete from "./ProductDelete";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getProductByIdHandler(id);
  }, []);

  async function getProductByIdHandler(id) {
    let data = await getProductById(id);
    if (data != null) {
      setProduct(data);
      setLoading(false);
    }
    console.log(product);
  }
  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Product Details {id}</h1>
          <p>Name : {product.productName}</p>
          <p>Price : {product.price}</p>
          <p>Category : {product.category}</p>
          <p>Description : {product.description}</p>
          <p>Product Code : {product.productCode}</p>
          <p>Star Rating : {product.starRating}</p>
        </>
      )}
      <ProductDelete id={id} />
    </div>
  );
};

export default ProductDetails;
