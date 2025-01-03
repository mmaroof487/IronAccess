import mongoose from "mongoose";

const organizationTransactionSchema = mongoose.Schema({
	organization: {
		type: mongoose.Schema.ObjectId,
		ref: organization,
		required: true,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: user,
		required: true,
	},
	recorded_by: {
		type: mongoose.Schema.ObjectId,
		ref: user,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	payment_type: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
		required: true,
	},
});

module.exports = mongoose.model("Transaction", organizationTransactionSchema);
