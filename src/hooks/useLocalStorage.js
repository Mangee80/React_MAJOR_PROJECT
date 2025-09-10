
import { useState, useEffect } from "react";

const useLocalStorage = (key) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      setData(JSON.parse(item));
    }
  }, [key]);

  return data;
};

export default useLocalStorage;
