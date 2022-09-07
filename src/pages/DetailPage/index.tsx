import React from "react";
import { useSaleDetail } from "./useSaleDetail";

export const DetailPage = () => {
  const { detail } = useSaleDetail();
  const { title, destination, photo, price, hotelDetails } = detail;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{destination}</h2>
      <img src={photo} />
      <p>{price}</p>
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
  );
};
