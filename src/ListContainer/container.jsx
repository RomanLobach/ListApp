import React, { useState } from "react";

import ItemsComponent from "./component";

import "./styles.scss";

const ListItems = () => {
  const [enterItem, setEnterItem] = useState("");
  const [items, setlistItems] = useState([]);

  const handleEnterItem = (e) => {
    setEnterItem(e.target.value);
  };

  const handleAddItem = () => {
    const handleIdexItem = () =>
      items.length === 0 ? 1 : items[items.length - 1].id + 1;

    const newItem = {
      id: handleIdexItem(),
      value: enterItem,
      addingSublist: false
    };

    setEnterItem("");
    setlistItems([...items, newItem]);
  };

  const handleAddingSublist = (itemId) => {
    items.forEach((item) =>
      item.id === itemId ? (item.addingSublist = true) : null
    );
    setlistItems([...items]);
  };

  const handleRemoveSublist = (itemId) => {
    items.forEach((item) =>
      item.id === itemId ? (item.addingSublist = false) : null
    );
    setlistItems([...items]);
  };

  const handleUpItem = (itemId) => {
    let itemIndex = items.findIndex((item) => item.id === itemId);

    items.splice(itemIndex - 1, 0, items[itemIndex]);
    items.splice(itemIndex + 1, 1);
    setlistItems([...items]);
  };

  const handleDownItem = (itemId) => {
    let itemIndex = items.findIndex((item) => item.id === itemId);

    items.splice(itemIndex + 2, 0, items[itemIndex]);
    items.splice(itemIndex, 1);
    setlistItems([...items]);
  };

  const handleRemoveItem = (itemId) =>
    setlistItems([...items.filter((item) => itemId !== item.id)]);

  return (
    <ItemsComponent
      enterItem={enterItem}
      items={items}
      onEnterItem={handleEnterItem}
      onAddItem={handleAddItem}
      upItem={handleUpItem}
      downItem={handleDownItem}
      onRemoveItem={handleRemoveItem}
      onAddingSublist={handleAddingSublist}
      onRemoveSublist={handleRemoveSublist}
    />
  );
};

export default ListItems;
