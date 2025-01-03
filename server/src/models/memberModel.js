import mongoose from "mongoose";
import organization from "./organizationModel";
import user from "./userModel";

const memberSchema = mongoose.Schema({
	organization: {
		type: mongoose.Schema.ObjectId,
		ref: organization,
		required: true,
	},
	members: [
		{
			user: {
				type: mongoose.Schema.ObjectId,
				ref: user,
				required: true,
			},
			role: {
				type: String,
				required: true,
			},
			validity: {
				type: String,
				required: true,
			},
			plan: {
				type: String,
				required: true,
			},
		},
	],
});

module.exports = mongoose.model("member", memberSchema);
