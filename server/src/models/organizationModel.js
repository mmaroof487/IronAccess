import mongoose from "mongoose";

const organizationSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	address: {
		streetAddress: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		pincode: {
			type: Number,
			required: true,
		},
	},
	images: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model("organization", organizationSchema);
