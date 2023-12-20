import React from "react";
import { Button } from "@mui/material";
import { useSettings } from "../../hooks/useSettings";

const ThemeToggleButton = () => {
  const { settings, saveSettings } = useSettings();
  return (
    <Button
      variant="contained"
      onClick={() => {
        saveSettings({
          ...settings,
          mode: settings.mode === "light" ? "dark" : "light",
        });
      }}
    >
      Mode {settings.mode}
    </Button>
  );
};

export default ThemeToggleButton;
