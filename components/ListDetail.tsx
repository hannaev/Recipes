import * as React from 'react'

import { Recipe } from '../interfaces'

type ListDetailProps = {
  item: Recipe
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
