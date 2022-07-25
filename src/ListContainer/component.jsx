import React from "react";

import EnterItem from "./EnterItem";
import List from "./List";

const ItmesComponent = ({
  enterItem,
  items,
  onEnterItem,
  onAddItem,
  upItem,
  downItem,
  onRemoveItem,
  onAddingSublist,
  onRemoveSublist
}) => (
  <ul className="items">
    <List
      items={items}
      upItem={upItem}
      downItem={downItem}
      onRemoveItem={onRemoveItem}
      onAddingSublist={onAddingSublist}
      onRemoveSublist={onRemoveSublist}
    />
    <EnterItem value={enterItem} onChange={onEnterItem} onClick={onAddItem} />
  </ul>
);

export default ItmesComponent;
