import React from 'react'
import Link from 'next/link'

import { Recipe } from '../interfaces'

type Props = {
  data: Recipe
}

const ListItem = ({ data }: Props) => (
  <div>
    <div className="flex">
      <div className="flex-none md:flex-1 ...">
        Responsive flex item
      </div>
    </div>
    <Link href="/users/[id]" as={`/users/${data.id}`}>
 
        {data.id}: {data.name}
   
    </Link>
  </div>
)

export default ListItem
