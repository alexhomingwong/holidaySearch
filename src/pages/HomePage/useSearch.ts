import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return { search, onSearchChange };
};
