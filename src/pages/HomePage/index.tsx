import React from "react";
import { useSearch } from "./useSearch";
import { useLazyQuery } from "@apollo/client";
import { SALE_SEARCH_QUERY } from "../../api";

export const HomePage = () => {
  const { search, onSearchChange } = useSearch();
  const [getSales, { data, loading, error }] = useLazyQuery(
    SALE_SEARCH_QUERY(search)
  );
  console.log(data);
  return (
    <div>
      <input value={search} onChange={onSearchChange} />
      <button type="submit" onClick={() => getSales()}>
        Search
      </button>
    </div>
  );
};
