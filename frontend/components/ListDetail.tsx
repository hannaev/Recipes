import * as React from 'react'

import { Recipe } from '../interfaces'

type ListDetailProps = {
  item: Recipe
}

const ListDetail = ({ item: recipe }: ListDetailProps) => (
  <div className="mx-8">
  <div className="grid grid-cols-2">
    <div className="p-6 bg-gray-600 text-white">
      <h1 className="text-5xl">Detail for {recipe.name}</h1>
      <img src="" alt="" />
      <p>ID: {recipe.id}</p>
      <span>Stars</span>
      <h2 className="text-md">Method</h2>
      <p>dasddasdsadasdasdasdasdasdadsdasdasd</p>
      <p>dasddasdsadasdasdasdasdasdadsdasdasd</p>
      <p>dasddasdsadasdasdasdasdasdadsdasdasd</p>
    </div>
    <div className="p-6 bg-white rounded-lg border-gray-200">
      <p>icon: 20 minutes</p>
      <p>Easy</p>
      <p>Serves: 5</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>
  </div>
  </div>
)

export default ListDetail
