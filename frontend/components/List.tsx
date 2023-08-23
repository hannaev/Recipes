import * as React from "react";

import { Recipe } from "../interfaces";

interface Props {
  items: Recipe[];
}

const List = ({ items }: Props): JSX.Element => (
  <div className="grid grid-cols-3 gap-4">
    {items.map((item, index) => (
      <p key={index}>Testing {item.name}</p>
    ))}
  </div>
);

export default List;
