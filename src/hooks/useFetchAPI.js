import { useState, useCallback } from "react";

const useFetchAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchAPI = useCallback(async (url, options) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchAPI, isLoading, result, error };
};

export default useFetchAPI;
