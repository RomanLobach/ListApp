import React from "react";

import "./styles.scss";

const EnterItem = ({ value, onChange, onClick }) => (
  <li className="enter-wrap">
    <input
      type="text"
      placeholder="Write your ListItem here"
      value={value}
      onChange={onChange}
      className="enter"
    />
    <button className="add" onClick={onClick}>
      Add Item
    </button>
  </li>
);

export default EnterItem;
