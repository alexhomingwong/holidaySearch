import styled from "styled-components";
import { palette } from "../../colours";

const { white, secondary } = palette;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  gap: 1rem;
  > h1 {
    color: ${white};
    margin: 0;
  }
  > p {
    color: ${white};
    margin: 0;
  }
`;

export const Message = styled.div`
  color: ${white};
  font-size: 2rem;
  margin: 2rem;
`;

export const Card = styled.div`
  display: flex;
  padding: 2rem;
  width: 50%;
  gap: 2rem;
  border: 1px solid ${white};
  background-color: ${secondary};
  cursor: pointer;
  > img {
    width: 10rem;
    height: 10rem;
  }
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1rem;
  }
`;
