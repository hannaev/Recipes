import React, { ReactNode } from 'react'

import Recipes from './Recipes'
import Navbar from './Navbar'
import Head from 'next/head'

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
      <img src="https://cdn.zerocater.com/wp-content/uploads/2020/09/Cookbook-blog-header-1600x732-1.png" width="100%" />
    </header>
    <Recipes />

    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
)

export default Layout
