import bcrypt, { hashSync } from "bcrypt";
import config from "../../config/index.js";
import userModel from "../../models/userModel.js";
import jwt from "jsonwebtoken";

const salt = bcrypt.genSaltSync(10);

const generateJWT = (user_id) =>
	jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
			data: {
				user_id: user_id,
			},
		},
		config.jwt_secret_key
	);

// POST: /api/v1/register
// @desc: Register an account
const registerUser = async (req, res) => {
	try {
		const { name, email, password = "", googleSignIn = false } = req.body;

		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			return res.status(404).json({
				meta: {
					error_message: "Email is already taken.",
					status: 404,
				},
			});
		}

		if (!password && !googleSignIn)
			return res.status(400).json({
				message: "Either password or Google sign-in data is required.",
				status: 400,
			});

		const createdUser = await userModel.create({
			name,
			email,
			googleSignIn,
			password: bcrypt.hashSync(password, salt),
		});

		res.status(201).json({
			message: "Signup successful",
			data: createdUser,
			token: generateJWT(createdUser._id),
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json({
			meta: {
				error_message: "Something went wrong.",
				status: 500,
			},
		});
	}
};

// POST: /api/v1/login
// @desc: Login to account
const loginUser = async (req, res) => {
	try {
		const { email, password, googleSignIn } = req.body;
		const user = await userModel.findOne({ email });

		if (user) {
			if (password || googleSignIn) {
				const hasMatched = bcrypt.compareSync(password, user.password);
				if (hasMatched || googleSignIn) {
					return res.status(200).json({
						message: "Login successful",
						data: user,
						token: generateJWT(user._id),
					});
				}
			}
		}
		return res.status(404).json({
			meta: {
				error_message: "Invalid email or password. Please try again.",
				status: 404,
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			meta: {
				error_message: "Something went wrong.",
				status: 500,
			},
		});
	}
};

export default { registerUser, loginUser };
