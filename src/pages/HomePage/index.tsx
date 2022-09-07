import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("London");

  return (
    <div>
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
      <button type="submit" onClick={() => navigate(`/search?query=${search}`)}>
        Search
      </button>
    </div>
  );
};
