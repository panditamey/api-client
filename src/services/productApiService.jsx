import axios from "axios";
const URL = `http://localhost:5046/api/Product/`;

async function getProducts() {
  let data = null;

  try {
    let response = await axios.get(URL + "all");
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function getProductById(productId) {
  let data = null;

  try {
    let response = await axios.get(`${URL}${productId}`);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function addProduct(product) {
  let data = null;

  try {
    let response = await axios.post(URL, product);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function deleteById(id) {
  let data = null;

  try {
    let response = await axios.delete(`${URL}?id=${id}`);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

export { getProductById, getProducts, addProduct, deleteById };
