import React from "react";
import { useSearch } from "./useSearch";

export const HomePage = () => {
  const { search, onSearchChange } = useSearch();

  return (
    <div>
      <input value={search} onChange={onSearchChange} />
      <button type="submit">Search</button>
    </div>
  );
};
