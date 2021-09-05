import React, { ReactNode } from 'react'


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
      <div className="grid md:grid-cols-2 py-6 my-6 px-6 mx-6 bg-purple-50">
      <div>
      <h1 className="text-indigo-500 text-3xl md:text-4xl font-mono font-bold mb-2">An awesome cookbook</h1>
      <p>lorem ipsum blablblta rtrtkarjtlrjtkjartkrajt jrkjtkalrjtlr jaktjrljtr gfkgjkfjgk</p>
      <button className="bg-indigo-400 text-white mr-2 py-2 px-6 rounded-full text-xl mt-6">Check recipes</button>
      <button className="bg-transparent text-xl hover:bg-indigo-400 text-indigo-700 hover:text-white py-2 px-4 border border-indigo-400 hover:border-transparent rounded-full">Learn more</button>
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/67/69/98/676998a3f3b216ff67f21244a0cba8af.png" width="100%" />
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
