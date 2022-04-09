import * as React from 'react'

import { Recipe } from '../interfaces'

type Props = {
  items: Recipe[]
}

const List = ({ items }: Props) => (
  <div className="grid grid-cols-3 gap-4">
    {items.map((item) => (
      <p>Testing {item.name}</p>
    ))}
  </div>
)

export default List
