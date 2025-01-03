import { useGoogleLogin } from "@react-oauth/google";
import { getUserInfo } from "@/services/api/google";
import { registerUser } from "@/services/api/auth";

export const GoogleButton = () => {
	const login = useGoogleLogin({
		onSuccess: async (response) => {
			const { data } = await getUserInfo(response.access_token);
			const body = { ...data, googleSignIn: true };
			registerUser(body)
				.then((res) => {
					console.log("User registered:", res.data);
				})
				.catch((error) => {
					console.error("Error during registration:", error.response?.data || error.message);
				});
		},
		onError: (error) => console.log("Login Failed:", error),
	});
	return (
		<button
			onClick={() => login()}
			className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-[#3e3e3e] rounded-lg shadow-sm bg-[#2e2e2e] text-sm font-medium text-white hover:bg-[#2e2e2e]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f04e3c] focus:ring-offset-[#1e1e1e]">
			<svg className="h-5 w-5" viewBox="0 0 24 24">
				<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
				<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
				<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
				<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
			</svg>
			Continue with Google
		</button>
	);
};
