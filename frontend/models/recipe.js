import mongoose, { Schema } from "mongoose";

const recipeScema = new Schema({
    title: String,
    description: String
}, {timestamps: true,}
);


const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeScema);

export default Recipe;