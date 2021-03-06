const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema(
  {
    type: { type: String, required: true },
    key: { type: String },
    title: { type: String, required: true },
    author: { type: String, default: "Anonymous" },
    journal: { type: String },
    pages: { type: String },
    volume: { type: String },
    annote: { type: String }, //will contain url's and descriptions of the entry
    publisher: { type: String },
    method: { type: String },
    participants: { type: String },
    year: { type: String },
    month: { type: String },
  },
  {
    timestamps: true,
  }
);

const Entry = mongoose.model("Entry", entrySchema);
const Analyst = mongoose.model("Analyst", entrySchema);
const Moderator = mongoose.model("Moderator", entrySchema);

module.exports = { Entry, Analyst, Moderator };
