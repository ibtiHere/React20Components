import { useState, useEffect } from "react";
const useLocalStorage = (key, defaultvalue) => {
  const [value, setValue] = useState(() => {
    let currentvalue;
    try {
      currentvalue = JSON.parse(
        localStorage.getItem(key) || String(defaultvalue)
      );
    } catch (error) {
      console.log(error);
      currentvalue = defaultvalue;
    }
    return currentvalue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
export default useLocalStorage;
