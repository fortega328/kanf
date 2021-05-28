import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  genderIdentity: { type: String, required: false },
  genderPreference: { type: String, required: false },
  password: { type: String, required: true },
  score: { type: String, required: false},
  buffCategory: { type: String, required: false},
  id: { type: String },
});

export default mongoose.model("User", userSchema);