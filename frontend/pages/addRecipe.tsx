import Layout from "../components/Layout";

const AddRecipe = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div>
      <label>
        Recipe name
        <input type="text" value="My recipe"></input>
      </label>
      <button>Send in recipe</button>
    </div>
  </Layout>
);

export default AddRecipe;
