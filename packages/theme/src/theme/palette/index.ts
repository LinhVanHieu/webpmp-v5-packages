// ** Type Imports
import { PaletteMode } from "@mui/material";
import { Skin, ThemeColor } from "../../layouts/types";

const DefaultPalette = (mode: PaletteMode, skin: Skin, themeColor: ThemeColor) => {
  // ** Vars
  const whiteColor = "#FFF";
  const lightColor = "58, 53, 65";
  const darkColor = "231, 227, 252";
  const mainColor = mode === "light" ? lightColor : darkColor;

  const primaryGradient = () => {
    if (themeColor === "primary") {
      return "#C6A7FE";
    } else if (themeColor === "secondary") {
      return "#9C9FA4";
    } else if (themeColor === "success") {
      return "#93DD5C";
    } else if (themeColor === "error") {
      return "#FF8C90";
    } else if (themeColor === "warning") {
      return "#FFCF5C";
    } else {
      return "#6ACDFF";
    }
  };

  const defaultBgColor = () => {
    if (skin === "bordered" && mode === "light") {
      return whiteColor;
    } else if (skin === "bordered" && mode === "dark") {
      return "#222B45";
    } else if (mode === "light") {
      return "#F4F5FA";
    } else return "#151E30";
  };

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      primaryGradient: primaryGradient(),
      bodyBg: mode === "light" ? "#F4F5FA" : "#151E30", // Same as palette.background.default but doesn't consider bordered skin
      trackBg: mode === "light" ? "#F0F2F8" : "#474360",
      darkBg: skin === "bordered" ? "#222B45" : "#151E30",
      lightBg: skin === "bordered" ? whiteColor : "#F4F5FA",
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#293350",
    },
    mode: mode,
    common: {
      black: "#000",
      white: whiteColor,
    },
    primary: {
      light: "#42A5F5",
      main: "#1976D2",
      dark: "#1565C0",
      contrastText: whiteColor,
    },
    secondary: {
      light: "#BA68C8",
      main: "#9C27B0",
      dark: "#7B1FA2",
      contrastText: whiteColor,
    },
    error: {
      light: "#EF5350",
      main: "#D32F2F",
      dark: "#C62828",
      contrastText: whiteColor,
    },
    warning: {
      light: "#FF9800",
      main: "#ED6C02",
      dark: "#E65100",
      contrastText: whiteColor,
    },
    info: {
      light: "#03A9F4",
      main: "#0288D1",
      dark: "#01579B",
      contrastText: whiteColor,
    },
    success: {
      light: "#4CAF50",
      main: "#2E7D32",
      dark: "#1B5E20",
      contrastText: whiteColor,
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#F5F5F5",
      A200: "#EEEEEE",
      A400: "#BDBDBD",
      A700: "#616161",
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? whiteColor : "#222B45",
      default: defaultBgColor(),
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};

export default DefaultPalette;
