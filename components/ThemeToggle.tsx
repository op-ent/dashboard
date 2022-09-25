import { Button } from "@op-ent/unstyled-ui";
import { useMode } from "~/hooks/useMode";

export default function ThemeToggle() {
  const { mode, toggleMode } = useMode();
  return (
    <Button size="sm" onClick={() => toggleMode()}>
      Mode: {mode}
    </Button>
  );
}
