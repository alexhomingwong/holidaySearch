import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { Container } from "./components";

export const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  return (
    <Container>
      <label htmlFor="destination">Where do you want to go?</label>
      <input
        id="destination"
        value={search}
        placeholder="London, Brighton, Bristol"
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
      <Button
        disabled={!Boolean(search)}
        type="submit"
        onClick={() => navigate(`/search?query=${search}`)}
      >
        Search
      </Button>
    </Container>
  );
};
