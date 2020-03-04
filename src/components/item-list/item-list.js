import React from "react";

import "./item-list.css";
import { withData } from "../hoc-helpers";

const ItemList = props => {
  const { data, onItemSelected, renderItem } = props;

  const items = data.map(item => {
    const { id } = item;

    const label = renderItem(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default withData(ItemList);
