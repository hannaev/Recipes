import React, { ReactNode } from 'react'


import Navbar from './Navbar'
import Head from 'next/head'
import Header from '../header.svg'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-primary-dark">
    <header>
      <Navbar />
      <div className="grid md:grid-cols-2">
      <div className="mx-auto my-auto pl-16 m-16">
      <h1 style={{color: 'white'}} className="py-3 text-6xl  font-mono font-bold mb-2">Collection of recipes</h1>
      </div>
      <div className="py-16 m-16">
      <img className="w-full" src="https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo" alt=""/>
      </div>
      </div>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    </div>
  </>
)

export default Layout
