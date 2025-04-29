import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  function updateStorage(newValue) {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [data, updateStorage];
}
