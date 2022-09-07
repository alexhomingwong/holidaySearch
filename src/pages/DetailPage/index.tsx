import React from "react";
import { Container } from "./components";
import { useSaleDetail } from "./useSaleDetail";

export const DetailPage = () => {
  const { detail } = useSaleDetail();
  const { title, destination, photo, price, hotelDetails } = detail;
  return (
    <Container>
      <h1>{title}</h1>
      <div className="info">
        <h2>{destination}</h2>
        <p>{price}</p>
      </div>
      <img src={photo} />
      <div className="detail">
        {
          /**
           * The below data is in html markup.
           * I can render this using the dangerous html render from React.
           * But doesn't feel safe for me render html without sanitising it first.
           * Feels out of scope to do this so will leave it for now as React already does html sanitisation.
           */
          hotelDetails
        }
      </div>
    </Container>
  );
};
