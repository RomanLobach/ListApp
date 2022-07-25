import React from "react";

import Item from "./Item";

import "./styles.scss";

const List = ({
  items,
  upItem,
  downItem,
  onRemoveItem,
  onAddingSublist,
  onRemoveSublist
}) => (
  <ul className="list">
    {items.map(({ id, value, addingSublist }) => (
      <Item
        key={id}
        id={id}
        value={value}
        upItem={upItem}
        downItem={downItem}
        onRemoveItem={onRemoveItem}
        onAddingSublist={onAddingSublist}
        addingSublist={addingSublist}
        onRemoveSublist={onRemoveSublist}
        items={items}
      />
    ))}
  </ul>
);

export default List;
