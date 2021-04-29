import { useQuery } from "react-query";
import { loadData } from "../utils/api";

export const useDdata = () => {
  return useQuery("farmdata", loadData);
};
