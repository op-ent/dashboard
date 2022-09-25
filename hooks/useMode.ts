import { useEffect, useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState("light");
  const [init, setInit] = useState(true);
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      if (init) {
        setInit(false);
      } else {
        localStorage.setItem("mode", "dark");
      }
    } else {
      document.documentElement.classList.remove("dark");
      if (init) {
        setInit(false);
      } else {
        localStorage.setItem("mode", "light");
      }
    }
  }, [mode, init]);

  // set initial value based on localstorage
  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    if (localMode) {
      setMode(localMode);
    }
  }, []);

  return { mode, toggleMode };
};
