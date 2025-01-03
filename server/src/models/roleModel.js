import mongoose from "mongoose";
import user from "./userModel";

const roleSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: user,
		required: type,
	},
	name: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("roles", roleSchema);
