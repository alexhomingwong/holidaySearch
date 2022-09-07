import styled from "styled-components";
import { palette } from "../../colours";

const { white } = palette;

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  padding: 3rem;
  gap: 2rem;
  h1 {
    color: ${white};
    margin: 0;
    font-size: 1.4rem;
  }
  > .info {
    display: flex;
    justify-content: space-between;
    h2 {
      margin: 0;
      color: ${white};
      font-size: 1.2rem;
      font-weight: 300;
    }
    p {
      margin: 0;
      color: ${white};
    }
  }
  .detail {
    color: ${white};
  }
`;
