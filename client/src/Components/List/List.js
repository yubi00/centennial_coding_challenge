import React from "react";
import { useDdata } from "../../hooks/useData";

const List = () => {
  const { data, isLoading, isError, error } = useDdata();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message} </div>;
  return <div></div>;
};

export default List;
