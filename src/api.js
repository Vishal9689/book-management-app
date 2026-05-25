import axios from "axios";

const API = axios.create({
  baseURL: "https://6a148c476c7db8aac054b549.mockapi.io/books"
});

export default API;