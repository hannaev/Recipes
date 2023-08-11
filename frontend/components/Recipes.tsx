import React from 'react'

import Link from 'next/link'
import { Recipe } from '../interfaces'

type Props = {
  items: Recipe[]
}

const Recipes = ({ items }: Props) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
  {items.map((item) => (
    <Link href={'/recipe/1'}>
  <div style={{cursor: 'pointer' }} className="max-w-sm rounded overflow-hidden hover:bg-primary-green">
    <img className="w-full" src="https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo" alt="Mountain"/>
    <div className="px-6 py-4">
      <h2 style={{color: 'white'}} className="font-bold text-xl mb-2">{item.name}</h2>
      <span style={{color: 'white'}} className="text-base">
        {item.description}
        <Link href="/about">link</Link>
      </span>
    </div>
    </div>
    </Link>

  ))}
  </div>

  )


export default Recipes
