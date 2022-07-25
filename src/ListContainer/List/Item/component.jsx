import React from "react";
import ListItems from "../../../ListContainer";

import "./styles.scss";

const Item = ({
  id,
  value,
  addingSublist,
  onRemoveItem,
  upItem,
  downItem,
  items,
  onAddingSublist,
  onRemoveSublist
}) => {
  return (
    <li className="item">
      <div className="value">
        <p className="content">{value}</p>
        <article className="sublist">
          {addingSublist ? (
            <>
              <h2>Sublist</h2>
              <ListItems />
              <button onClick={() => onRemoveSublist(id)}>
                remove Sublist
              </button>
            </>
          ) : null}
        </article>
      </div>
      <div className="buttons">
        <button
          className={
            items.findIndex((item) => item.id === id) === 0 ? "hidden" : null
          }
          onClick={() => upItem(id)}
        >
          up
        </button>
        <button
          className={
            items.findIndex((item) => item.id === id) === items.length - 1
              ? "hidden"
              : null
          }
          onClick={() => downItem(id)}
        >
          down
        </button>
        <button
          className={addingSublist ? "hidden" : null}
          onClick={() => onAddingSublist(id)}
        >
          add sublist
        </button>
        <button onClick={() => onRemoveItem(id)}>remove</button>
      </div>
    </li>
  );
};

export default Item;
