import mongoose from "mongoose";

const planSchema = mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("plans", planSchema);
