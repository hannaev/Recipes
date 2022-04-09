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
    <header>
      <Navbar />
      <div className="bg-primary-white grid md:grid-cols-2 px-8 md:offset-1">
      <div className="my-auto mx-auto">
      <h1 style={{fontFamily: "'Comfortaa', cursive" }} className="py-3 colors-primary-green text-6xl  font-mono font-bold mb-2">Discover new recipes</h1>
          <p className="py-4 text-xl">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <button className="bg-primary-darkGreen text-white mr-2 py-2 px-6 rounded-full text-xl mt-6">Check recipes</button>

      </div>
      <div >
        <Header style={{width: '100%'}}/>
      </div>
      </div>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    
  </>
)

export default Layout
