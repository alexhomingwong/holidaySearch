import React from "react";
import { ILocations } from "../../services";
import { useNavigate } from "react-router-dom";
import { Card } from "./components";

export const LocationCard = (location: ILocations) => {
  const navigate = useNavigate();
  return (
    <Card key={location.id} onClick={() => navigate(`/sale/${location.id}`)}>
      <img src={location.photo} alt={location.title} />
      <div>
        <h2>{location.title}</h2>
        <p>{location.destination}</p>
      </div>
    </Card>
  );
};
