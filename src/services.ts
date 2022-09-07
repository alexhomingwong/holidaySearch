export interface ILocations {
  id: string;
  photo: string;
  destination: string;
  title: string;
}

// Format the data from the backend to make sure we always get a similar data structure for the frontend
export const formatSaleSearch = (data: any[]): ILocations[] => {
  return data.map((location) => {
    return {
      id: location?.id || "",
      photo: location?.photos?.[0]?.url || "", // Assumes first photo is lead photo
      destination: location?.editorial?.destinationName || "",
      title: location?.editorial?.title || "",
    };
  });
};

export interface ISaleDetail {
  title: string;
  destination: string;
  photo: string;
  hotelDetails: string;
  price: string;
}

export const formatSaleDetail = (data: Record<string, any>) => {
  return {
    title: data?.editorial?.title || "",
    destination: data?.editorial?.destinationName || "",
    photo: data?.photos?.[0]?.url || "", // Assumes first photo is lead photo
    hotelDetails: data?.editorial?.hotelDetails || "",
    price: data?.prices?.leadRate?.forDisplay || "",
  };
};
