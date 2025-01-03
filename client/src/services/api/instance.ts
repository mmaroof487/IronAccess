import config from "@/config";
import axios from "axios";

const instance = axios.create({
	baseURL: config.baseUrl,
	headers: {
		"Content-Type": "application/json", // Ensure the content type matches
	},
});

export default instance;
