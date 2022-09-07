import styled from "styled-components";
import { palette } from "../../colours";

const { primary, secondary, white } = palette;

// Still missing a lot of hover, focus style etc
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30rem;
  margin: 10% auto;
  text-align: center;
  color: ${white};
  justify-content: center;
  align-items: center;
  gap: 2rem;
  > input {
    padding: 1rem 2rem;
    background-color: ${white};
    width: 100%;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: ${primary};
    text-align: center;
  }
`;
