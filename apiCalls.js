import axios from "axios";
import { signUpApi, loginApi, carDetailApi } from "./endpoints";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(signUpApi, userData);

        return response.data;
    } catch (error) {
        console.error("Error in registerUser:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Failed to register user.");
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(loginApi, userData);

        return response.data;
    } catch (error) {
        console.error("Error in loginUser:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Failed to log in.");
    }
};

// export const getCarDetails = async () => {
//     try {
//         const response = await axios.get(carDetailApi);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

const productApi = "http://192.168.1.8:5000/api/v1/product/get-products";

 export const getProduct = async () => {
    try {
      const { data } = await axios.get(productApi);
      console.log(data);
      setProducts(data.products); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
