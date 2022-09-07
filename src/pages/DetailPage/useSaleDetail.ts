import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SALE_QUERY } from "../../api";
import { formatSaleDetail } from "../../services";

export const useSaleDetail = () => {
  const { saleId } = useParams<{ saleId: string }>();

  const { loading, error, data } = useQuery(SALE_QUERY(saleId || ""));

  return { loading, error, detail: formatSaleDetail(data?.sale || {}) };
};
