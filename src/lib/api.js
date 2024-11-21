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
