import React, { useState } from "react";
import { addProduct } from "../services/productApiService";

const ProductAdd = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [starRating, setStarRating] = useState("");
  const [description, setDescription] = useState("");
  const [productCode, setProductCode] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let pData = {
      productName: name,
      price: price,
      category: category,
      starRating: starRating,
      description: description,
      productCode: productCode,
      imageUrl: imageUrl,
    };

    const res = await addProduct(pData);
    if (res != null) {
      setName("");
      setPrice("");
      setCategory("");
      setStarRating("");
      setDescription("");
      setProductCode("");
      setImageUrl("");
      alert("Product Added Successfully");
    } else {
      alert("Product Not Added");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Product Add</h1>
        <form>
          <div className="form-group ">
            <label forhtml="name">Product Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              placeholder="Cricket Bat"
            />
          </div>
          <div className="form-group">
            <label forhtml="price">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="form-control"
              id="price"
              placeholder="1000"
            />
          </div>
          <div className="form-group">
            <label forhtml="category">Category</label>
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="form-control"
              id="category"
              placeholder="Cricket"
            />
          </div>
          <div className="form-group">
            <label forhtml="starRating">Star Rating</label>
            <input
              onChange={(e) => setStarRating(e.target.value)}
              type="number"
              className="form-control"
              id="starRating"
              placeholder="5"
            />
          </div>
          <div className="form-group">
            <label forhtml="description">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="description"
              rows="3"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="form-group">
            <label forhtml="productCode">Product Code</label>
            <input
              onChange={(e) => setProductCode(e.target.value)}
              type="text"
              className="form-control"
              id="productCode"
              placeholder="P001"
            />
          </div>
          <div className="form-group">
            <label forhtml="imageUrl">Image Url</label>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="https://picsum.photos/200/300"
            />
          </div>
          <br />

          <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductAdd;
