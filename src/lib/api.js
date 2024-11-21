export const loginAPI = (username, password) => {
  return {
    url: "https://fakestoreapi.com/auth/login",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    },
  };
};

export const getProductsAPI = () => {
  return {
    url: "https://fakestoreapi.com/products",
    options: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  };
};
