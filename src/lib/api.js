const fetchAPI = (url, options) => {
  return fetch(url, options)
    .then((response) => {
      if (response.ok) return response;
      else throw new Error(response.status);
    })
    .then((response) => response.json());
};

export const login = (username, password) => {
  return fetchAPI("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
};
