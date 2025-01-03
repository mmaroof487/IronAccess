import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
		},
		googleSignIn: {
			type: Boolean,
			default: false,
		},
		phone: {
			type: Number,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.set("toJSON", {
	transform: (doc, ret) => {
		delete ret.password;
		delete ret.deleted_at;
		delete ret.__v;
		delete ret.updatedAt;
		return ret;
	},
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
