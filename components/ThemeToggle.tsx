import { Button } from "@op-ent/unstyled-ui";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <Button
      size="sm"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      Mode: {mode}
    </Button>
  );
}
