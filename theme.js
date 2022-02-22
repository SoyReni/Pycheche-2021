import { createTheme } from "@material-ui/core/styles";

const main = "#FFB287";
const mainWhite = "#fafafa";
const secondary = "#FF7893";
const blue = "#757ce8";
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: main,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: main,
    },
    secondary: {
      main: mainWhite,
    },
    button:{
      main: secondary,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    a: {
      color: main,
    },
  },
});

export default theme;
