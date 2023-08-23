import React from "react";
import Link from "next/link";

import { Recipe } from "../interfaces";

interface Props {
  data: Recipe;
}
function ListItem({ data }: Props): JSX.Element {
  return (
    <div>
      <div className="flex">
        <div className="flex-none md:flex-1 ...">Responsive flex item</div>
      </div>
      <Link href="/users/[id]" as={`/users/${data.id}`}>
        {data.id}: {data.name}
      </Link>
    </div>
  );
}
export default ListItem;
