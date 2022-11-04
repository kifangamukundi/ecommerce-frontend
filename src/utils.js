export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const BASE_URL = "https://ecommerce-backend-qw7l.onrender.com";
