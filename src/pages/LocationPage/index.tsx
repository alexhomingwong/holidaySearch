import React from "react";
import { useLocations } from "./useLocations";

export const LocationPage = () => {
  const { queryLocation, locations, loading, error } = useLocations();

  if (loading) return <div>loading...</div>;
  if (error) return <div>Sorry, there was an error. {error.message}</div>;

  return (
    <div>
      <h1>{queryLocation}</h1>
      {locations.map((location) => (
        <div key={location.id}>
          <p>{location.title}</p>
          <p>{location.destination}</p>
          <img src={location.photo} />
        </div>
      ))}
    </div>
  );
};
