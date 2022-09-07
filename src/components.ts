import { createGlobalStyle } from "styled-components";
import { palette } from "./colours";

const { primary } = palette;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${primary};
  }
`;
