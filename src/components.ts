import styled, { createGlobalStyle } from "styled-components";
import { palette } from "./colours";

const { primary, secondary, white } = palette;

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

export const Button = styled.button`
  background-color: ${secondary};
  border: none;
  outline: none;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${white};
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`;
