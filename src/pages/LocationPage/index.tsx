import React from "react";
import { useLocations } from "./useLocations";
import { useNavigate } from "react-router-dom";
import { Message, Container } from "./components";
import { Button } from "../../components";
import { LocationCard } from "./LocationCard";

export const LocationPage = () => {
  const { queryLocation, locations, loading, error, totalResults } =
    useLocations();
  const navigate = useNavigate();

  if (loading)
    return (
      <Container>
        <Message>loading...</Message>
      </Container>
    );

  if (error)
    return (
      <Container>
        <Message>Sorry, there was an error. {error.message}</Message>
      </Container>
    );

  if (locations.length === 0)
    return (
      <Container>
        <Message>Sorry, nothing matched your query.</Message>
        <Button type="button" onClick={() => navigate(`/`)}>
          Please go back and try again.
        </Button>
      </Container>
    );

  return (
    <Container>
      <h1>{queryLocation || "Show me everything!"}</h1>
      <p>Found {totalResults} places that matched your search.</p>
      {locations.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </Container>
  );
};
