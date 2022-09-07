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
      photo: location?.photos?.[0]?.url || "", // Always grab the first photo for simplicity
      destination: location?.editorial?.destinationName || "",
      title: location?.editorial?.title || "",
    };
  });
};
