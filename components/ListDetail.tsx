import * as React from 'react'

import { Recipe } from '../interfaces'

type ListDetailProps = {
  item: Recipe
}

const ListDetail = ({ item: recipe }: ListDetailProps) => (
  <div className="grid grid-flow-col grid-cols-2 sm:grid-cols-1 gap-4">
    <div>
      <h1 className="text-5xl">Detail for {recipe.name}</h1>
      <img src="" alt="" />
      <p>ID: {recipe.id}</p>
      <h2 className="text-md">Directions</h2>
    </div>
    <div>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>
  </div>
)

export default ListDetail
