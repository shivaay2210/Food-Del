import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // cloudinary url
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// This line checks if a model named "food" already exists in mongoose.models (which stores all defined models).
// so now, The model is created only once, even if the server restarts multiple times, preventing the OverwriteModelError.

export default foodModel;
