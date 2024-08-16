import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductsList from "../products/ProductsList";
import ProductCard from "../products/ProductCard";
import ProductDetails from "../products/ProductDetails";
import NavBar from "../components/NavBar";
import ProductAdd from "../products/ProductAdd";

const RouterConfiguration = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add" element={<ProductAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfiguration;
