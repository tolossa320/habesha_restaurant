import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/habesha-restaurant-da60e/us-central1/api",
  baseURL: "https://restaurantbacend.onrender.com/",
});

export { axiosInstance };
