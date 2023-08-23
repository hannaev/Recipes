import React from 'react'

import Link from 'next/link'
import { type Recipe } from '../interfaces'

interface Props {
  items: Recipe[]
}

const Recipes = ({ items }: Props): JSX.Element => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
  {items.map((item, index) => (
    <Link key={index} href={'/recipe/1'}>
        <div style={{ cursor: 'pointer' }} className="max-w-sm rounded overflow-hidden hover:bg-primary-coffee">
    <img className="w-full" src="https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo" alt="Mountain"/>
    <div className="px-6 py-4">
      <h2 className="text-primary-indigo  font-bold text-4xl mb-2">{item.name}</h2>
      <span className="text-primary-purple">
        {item.description}
      </span>
    </div>
    </div>
    </Link>

  ))}
  </div>

)

export default Recipes
