
import Layout from '../components/Layout'
import Recipes from "../components/Recipes"

import { sampleRecipeData } from "../utils/sample-recipes"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Recipes items={sampleRecipeData}/>
  </Layout>
)

export default IndexPage
