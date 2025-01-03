import mongoose from "mongoose";

const oraganizationPlanSchema = mongoose.Schema({
	organization: {
		type: mongoose.Schema.ObjectId,
		ref: organization,
		required: true,
	},
	details: {
		amount: {
			type: Number,
			required: true,
		},
		months: {
			type: Number,
			required: true,
		},
		features: {
			type: String,
			required: true,
		},
	},
});

module.exports = mongoose.model("organizationPlan", oraganizationPlanSchema);
