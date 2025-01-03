import mongoose from "mongoose";
import organization from "./organizationModel";
import plan from "./planModel";

const transactionSchema = mongoose.Schema({
	details: {
		type: String,
	},
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
});

module.exports = mongoose.model("transaction", transactionSchema);
