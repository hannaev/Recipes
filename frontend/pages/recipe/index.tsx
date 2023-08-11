import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Recipe } from '../../interfaces'
import { sampleRecipeData } from '../../utils/sample-recipes'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Recipe[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside .
    </p>
    <p>You are currently on: /recipes</p>
    <List items={items} />
   
      <Link href="/">
        Go home
      </Link>
 
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Recipe[] = sampleRecipeData
  return { props: { items } }
}

export default WithStaticProps
