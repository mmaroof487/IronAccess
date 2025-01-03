import dotenv from "dotenv";
dotenv.config();

export default {
	mongo_uri: process.env.MONGO_DB_URI,
	jwt_secret_key: process.env.JWT_SECRET_KEY,
	port: process.env.PORT,
};
