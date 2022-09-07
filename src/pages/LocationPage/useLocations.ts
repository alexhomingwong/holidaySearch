import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SALE_SEARCH_QUERY } from "../../api";
import { formatSaleSearch, ILocations } from "../../services";

export const useLocations = () => {
  const [params] = useSearchParams();
  const queryLocation = params.get("query");
  const { loading, error, data } = useQuery(
    SALE_SEARCH_QUERY(queryLocation || "")
  );
  const locations: ILocations[] = Array.isArray(data?.saleSearch?.sales)
    ? data.saleSearch.sales
    : [];

  return {
    queryLocation,
    locations: formatSaleSearch(locations),
    loading,
    error,
  };
};
