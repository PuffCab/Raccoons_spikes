import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String, required: false },
  color: { type: String, required: false },
  type: { type: String, required: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const PetModel = mongoose.model("pet", petSchema);

export default PetModel;
