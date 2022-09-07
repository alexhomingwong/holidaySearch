import { gql } from "@apollo/client";

export const baseApi = "https://staging.sparrow.escapes.tech/graphql/";

export const SALE_SEARCH_QUERY = (location: string) => gql`
  {
    saleSearch(query: "${location}", travelTypes: "HOTEL_ONLY") {
      resultCount
      sales(limit: 10, offset: 0) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;

export const SALE_QUERY = (id: string) => gql`
  {
    sale(saleId: "${id}") {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
      }
    }
  }
`;
