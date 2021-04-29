import React from "react";

const ListItem = ({ item, index }) => {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>{item.Timestamp}</td>
      <td>{item["Site - Battery Power"]}</td>
      <td>{item["Site - Grid Power"]}</td>
      <td>{item["Site - Load Power"]}</td>
      <td>{item["Site - PV Power"]}</td>
    </tr>
  );
};

export default ListItem;
