import React from "react";

const ListItem = ({ item, index }) => {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>{item.timestamp}</td>
      <td>{item.batteryPower}</td>
      <td>{item.gridPower}</td>
      <td>{item.loadPower}</td>
      <td>{item.pvPower}</td>
    </tr>
  );
};

export default ListItem;
