import React, { ReactNode } from "react";

import Navbar from "./Navbar";
import Head from "next/head";

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({
  children,
  title = "This is the default title",
}: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-primary-honeydew">
      <header>
        <Navbar />
        <div className="grid md:grid-cols-2">
          <div className="mx-auto my-auto pl-16 m-16">
            <h1 className="text-primary-raspberry font-white py-3 text-6xl font-mono font-bold mb-2">
              Collection of recipes
            </h1>
          </div>
          <div className="py-16 m-16">
            <img
              className="w-full"
              src="https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo"
              alt=""
            />
          </div>
        </div>
      </header>
      {children}
    </div>
  </>
);

export default Layout;
