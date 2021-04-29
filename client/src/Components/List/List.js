import React from "react";
import { useDdata } from "../../hooks/useData";
import { Table } from "reactstrap";
import ListItem from "./ListItem/ListItem";

const List = () => {
  const { data, isLoading, isError, error } = useDdata();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message} </div>;

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Timestamp</th>
          <th>Battery Power</th>
          <th>Grid Power</th>
          <th>Load Power</th>
          <th>PV Power</th>
        </tr>
      </thead>
      <tbody>
        {data.data &&
          data.data.map((item, i) => (
            <ListItem key={item.timestamp} item={item} index={i} />
          ))}
      </tbody>
    </Table>
  );
};

export default List;
