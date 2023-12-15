const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter a name"],
  },
  sectors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sector",
  },
  selectedSector: {
    type: String,
    default: null,
  },
  agree: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
