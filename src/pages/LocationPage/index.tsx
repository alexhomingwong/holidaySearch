import React from "react";
import { useLocations } from "./useLocations";
import { useNavigate } from "react-router-dom";

export const LocationPage = () => {
  const { queryLocation, locations, loading, error } = useLocations();
  const navigate = useNavigate();

  if (loading) return <div>loading...</div>;
  if (error) return <div>Sorry, there was an error. {error.message}</div>;

  return (
    <div>
      <h1>{queryLocation || "Show me everything!"}</h1>
      {locations.map((location) => (
        <div key={location.id} onClick={() => navigate(`/sale/${location.id}`)}>
          <p>{location.title}</p>
          <p>{location.destination}</p>
          <img src={location.photo} />
        </div>
      ))}
    </div>
  );
};
