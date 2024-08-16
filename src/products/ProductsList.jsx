import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

import { getProducts } from "../services/productApiService";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsHandler();
  }, []);

  async function getProductsHandler() {
    let data = await getProducts();
    if (data != null) {
      setProducts(data);
    }
    console.log(products);
  }

  const displayProducts = () => {
    return products.length > 0 ? (
      products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))
    ) : (
      <h1>No Products Found</h1>
    );
  };
  return (
    <div className="container">
      <h1 className="text-center">Product List :{products.length} </h1>
      <div className="row ">{displayProducts()}</div>
    </div>
  );
};

export default ProductsList;
