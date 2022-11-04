export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const BASE_URL = "https://ecommerce-backend-spa4.onrender.com";
