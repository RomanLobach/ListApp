import React from "react";

import ListItems from "../ListContainer";

import "./styles.scss";

const ListApp = () => (
  <section className="list-app">
    <h1 className="list-app__title">Welcome to the List App!</h1>
    <ListItems />
  </section>
);

export default ListApp;
