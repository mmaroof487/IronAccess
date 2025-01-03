import mongoose from "mongoose";
import organization from "./organizationModel";
import plan from "./planModel";

const planMappingSchema = mongoose.Schema({
	organization: {
		type: mongoose.Schema.ObjectId,
		ref: organization,
		required: true,
	},
	plan: {
		type: mongoose.Schema.ObjectId,
		ref: plan,
		required: true,
	},
	valid_from: {
		type: Date,
		default: Date.now,
	},
	valid_till: {
		type: Date,
	},
});

module.exports = mongoose.model("planMapping", planMappingSchema);
