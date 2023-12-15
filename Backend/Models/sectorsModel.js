const mongoose = require("mongoose");

const sectorSchema = new mongoose.Schema({
  //   sectors: {
  //     type: [
  //       {
  //         type: mongoose.Schema.Types.Mixed,
  //       },
  //     ],
  //   },
  sectors: [
    {
      type: mongoose.Schema.Types.Mixed,
    },
  ],
});

const Sector = mongoose.model("Sector", sectorSchema);

module.exports = Sector;
