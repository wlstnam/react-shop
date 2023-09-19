import axios from "axios";

const fakestore = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchProducts = () => fakestore.get("/products");
